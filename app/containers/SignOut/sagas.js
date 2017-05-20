import { take, call } from 'redux-saga/effects';
import { SIGN_OUT } from '../SignOut/constants';

function removeAuthToken() {
  localStorage.removeItem('token');
}

export function* signOut() {
  while (true) { //eslint-disable-line
    yield take(SIGN_OUT);
    yield call(removeAuthToken);
  }
}

export default [
  signOut,
];
