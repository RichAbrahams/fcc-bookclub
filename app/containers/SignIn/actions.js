/*
 *
 * SignIn actions
 *
 */

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
} from './constants';

export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
}

