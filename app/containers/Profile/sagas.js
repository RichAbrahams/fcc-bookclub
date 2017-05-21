import { take, put, cancel, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import toastr from 'toastr';
import { SubmissionError } from 'redux-form/immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { UPDATE_PASSWORD, UPDATE_PROFILE } from './constants';
import { selectToken } from '../Header/selectors';
import { updateProfileSuccess } from './actions';

export function* updateProfileSaga(action) {
  const { data, resolve, reject } = action.payload;
  try {
    const token = yield select(selectToken());
    const requestURL = '/api/updateprofile';
    const config = { headers: { authorization: token } };
    const response = yield axios.post(requestURL, data.toJS(), config);
    toastr.success('profile updated');
    resolve();
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toastr.error('sorry, an error occurred');
    reject(new SubmissionError({ _error: 'sorry, an error occurred' }));
  }
}

export function* updateProfileWatcher() {
  const watcher = yield takeLatest(UPDATE_PROFILE, updateProfileSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updatePasswordSaga(action) {
  const { data, resolve, reject } = action.payload;
  try {
    const token = yield select(selectToken());
    const requestURL = '/api/updatepassword';
    const config = { headers: { authorization: token } };
    yield axios.post(requestURL, data.toJS(), config);
    yield resolve();
  } catch (err) {
    reject(new SubmissionError({ _error: 'password incorrect' }));
  }
}

export function* updatePasswordWatcher() {
  const watcher = yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  updateProfileWatcher,
  updatePasswordWatcher,
];
