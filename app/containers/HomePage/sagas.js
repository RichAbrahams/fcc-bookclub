import { take, put, cancel, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import toastr from 'toastr';
import { LOCATION_CHANGE } from 'react-router-redux';
import { REQUEST_TRADE, RETRIEVE_AVAILABLE_BOOKS } from './constants';
import { retrieveAvailableBooksSuccess, requestTradeSuccess } from './actions';
import { selectToken } from '../Header/selectors';

export function* requestTrade(action) {
  try {
    const book = { id: action.payload };
    const token = yield select(selectToken());
    const config = { headers: { authorization: token } };
    const requestURL = '/api/requesttrade';
    const request = yield axios.post(requestURL, book, config);
    if (request.data.book) {
      toastr.success('trade requested');
      yield put(requestTradeSuccess(request.data.book));
    } else {
      toastr.warning('book requested by another user');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* requestTradeWatcher() {
  const watcher = yield takeLatest(REQUEST_TRADE, requestTrade);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* retrieveAvailableBooks() {
  try {
    const requestURL = '/api/retrieveavailablebooks';
    const request = yield axios.get(requestURL);
    if (request.data.success) {
      yield put(retrieveAvailableBooksSuccess(request.data.books));
    } else {
      toastr.warning('unable to retrieve books');
    }
  } catch (err) {
    toastr.error('sorry, an error occurred');
  }
}

export function* retrieveAvailableBooksWatcher() {
  const watcher = yield takeLatest(RETRIEVE_AVAILABLE_BOOKS, retrieveAvailableBooks);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  requestTradeWatcher,
  retrieveAvailableBooksWatcher,
];
