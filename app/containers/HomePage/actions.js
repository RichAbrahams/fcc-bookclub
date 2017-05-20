
import {
  REQUEST_TRADE,
  REQUEST_TRADE_SUCCESS,
  RETRIEVE_AVAILABLE_BOOKS,
  RETRIEVE_AVAILABLE_BOOKS_SUCCESS,
} from './constants';

export function requestTrade(payload) {
  return {
    type: REQUEST_TRADE,
    payload,
  };
}

export function requestTradeSuccess(payload) {
  return {
    type: REQUEST_TRADE_SUCCESS,
    payload,
  };
}


export function retrieveAvailableBooks() {
  return {
    type: RETRIEVE_AVAILABLE_BOOKS,
  };
}

export function retrieveAvailableBooksSuccess(payload) {
  return {
    type: RETRIEVE_AVAILABLE_BOOKS_SUCCESS,
    payload,
  };
}

