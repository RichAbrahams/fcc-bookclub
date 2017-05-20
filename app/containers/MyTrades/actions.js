/*
 *
 * MyTrades actions
 *
 */

import {
  RETRIEVE_MY_TRADES,
  RETRIEVE_MY_TRADES_SUCCESS,
  CHANGE_ACTIVE_NAV_KEY,
  INCREMENT_ACTIVE_NAV_KEY,
  DECREMENT_ACTIVE_NAV_KEY,
  CANCEL_REQUEST,
  CANCEL_REQUEST_SUCCESS,
  APPROVE_REQUEST,
  APPROVE_REQUEST_SUCCESS,
  DECLINE_REQUEST,
  DECLINE_REQUEST_SUCCESS,
  SET_TO_RETURNED,
  SET_TO_RETURNED_SUCCESS,
} from './constants';

export function retrieveMyTrades() {
  return {
    type: RETRIEVE_MY_TRADES,
  };
}

export function retrieveMyTradesSuccess(payload) {
  return {
    type: RETRIEVE_MY_TRADES_SUCCESS,
    payload,
  };
}

export function changeActiveNavKey(payload) {
  return {
    type: CHANGE_ACTIVE_NAV_KEY,
    payload,
  };
}

export function cancelRequest(payload) {
  return {
    type: CANCEL_REQUEST,
    payload,
  };
}

export function cancelRequestSuccess(payload) {
  return {
    type: CANCEL_REQUEST_SUCCESS,
    payload,
  };
}

export function approveRequest(payload) {
  return {
    type: APPROVE_REQUEST,
    payload,
  };
}

export function approveRequestSuccess(payload) {
  return {
    type: APPROVE_REQUEST_SUCCESS,
    payload,
  };
}


export function declineRequest(payload) {
  return {
    type: DECLINE_REQUEST,
    payload,
  };
}

export function declineRequestSuccess(payload) {
  return {
    type: DECLINE_REQUEST_SUCCESS,
    payload,
  };
}

export function setToReturned(payload) {
  return {
    type: SET_TO_RETURNED,
    payload,
  };
}

export function setToReturnedSuccess(payload) {
  return {
    type: SET_TO_RETURNED_SUCCESS,
    payload,
  };
}

export function incrementActiveNavKey() {
  return {
    type: INCREMENT_ACTIVE_NAV_KEY,
  };
}

export function decrementActiveNavKey() {
  return {
    type: DECREMENT_ACTIVE_NAV_KEY,
  };
}
