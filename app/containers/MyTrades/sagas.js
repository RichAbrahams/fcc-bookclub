import { take, put, cancel, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import toastr from 'toastr';
import { LOCATION_CHANGE } from 'react-router-redux';
import { RETRIEVE_MY_TRADES, CANCEL_REQUEST, APPROVE_REQUEST, DECLINE_REQUEST, SET_TO_RETURNED } from './constants';
import { retrieveMyTradesSuccess, cancelRequestSuccess, approveRequestSuccess, declineRequestSuccess, setToReturnedSuccess } from './actions';
import { selectToken } from '../Header/selectors';


export function* retrieveUserTradesSaga() {
  try {
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/retrieveusertrades';
    const request = yield axios.get(requestURL, config);
    if (request.data.success) {
      yield put(retrieveMyTradesSuccess(request.data.books));
    } else {
      toastr.warning('could not retrieve your trades from server');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* retrieveUserTradesWatcher() {
  const watcher = yield takeLatest(RETRIEVE_MY_TRADES, retrieveUserTradesSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* cancelRequestSaga(action) {
  try {
    const book = { id: action.payload };
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/cancelrequest';
    const request = yield axios.post(requestURL, book, config);
    if (request.data.book) {
      toastr.success('trade requested cancelled');
      yield put(cancelRequestSuccess(request.data.book));
    } else {
      toastr.warning('trade was already cancelled');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* cancelRequestWatcher() {
  const watcher = yield takeLatest(CANCEL_REQUEST, cancelRequestSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* approveRequestSaga(action) {
  try {
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/approverequest';
    const request = yield axios.post(requestURL, action.payload, config);
    if (request.data.book) {
      toastr.success('trade requested approved');
      yield put(approveRequestSuccess(request.data.book));
    } else {
      toastr.warning('sorry, an error occurred');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* approveRequestWatcher() {
  const watcher = yield takeLatest(APPROVE_REQUEST, approveRequestSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* declineRequestSaga(action) {
  try {
    const book = { id: action.payload };
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/declinerequest';
    const request = yield axios.post(requestURL, book, config);
    if (request.data.book) {
      toastr.success('trade requested declined');
      yield put(declineRequestSuccess(request.data.book));
    } else {
      toastr.warning('trade was already declined');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* declineRequestWatcher() {
  const watcher = yield takeLatest(DECLINE_REQUEST, declineRequestSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* setToReturnedSaga(action) {
  const book = { id: action.payload };
  const token = yield select(selectToken());
  const config = { headers: { authorization: token } };
  const requestURL = '/api/bookreturned';
  try {
    const request = yield axios.post(requestURL, book, config);
    if (request.data.book) {
      toastr.success('book updated');
      yield put(setToReturnedSuccess(request.data.book));
    } else {
      toastr.warning('book already confirmed');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* setToReturnedWatcher() {
  const watcher = yield takeLatest(SET_TO_RETURNED, setToReturnedSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  retrieveUserTradesWatcher,
  cancelRequestWatcher,
  approveRequestWatcher,
  declineRequestWatcher,
  setToReturnedWatcher,
];
