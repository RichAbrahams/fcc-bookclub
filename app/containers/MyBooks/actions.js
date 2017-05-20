/*
 *
 * MyBooks actions
 *
 */

import {
  RETRIEVE_MY_BOOKS,
  RETRIEVE_MY_BOOKS_SUCCESS,
  DELETE_MY_BOOK,
  DELETE_MY_BOOK_SUCCESS,
  CHANGE_ACTIVE_NAV_KEY,
  SUBMIT_TITLE_SEARCH,
  TITLE_SEARCH_SUCCESS,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  INCREMENT_ACTIVE_NAV_KEY,
  DECREMENT_ACTIVE_NAV_KEY,
} from './constants';


export function retrieveMyBooks() {
  return {
    type: RETRIEVE_MY_BOOKS,
  };
}

export function retrieveMyBooksSuccess(payload) {
  return {
    type: RETRIEVE_MY_BOOKS_SUCCESS,
    payload,
  };
}

export function deleteMyBook(payload) {
  return {
    type: DELETE_MY_BOOK,
    payload,
  };
}

export function deleteMyBookSuccess(payload) {
  return {
    type: DELETE_MY_BOOK_SUCCESS,
    payload,
  };
}

export function changeActiveNavKey(payload) {
  return {
    type: CHANGE_ACTIVE_NAV_KEY,
    payload,
  };
}

export function submitTitleSearch(payload) {
  return {
    type: SUBMIT_TITLE_SEARCH,
    payload,
  };
}

export function titleSearchSuccess(payload) {
  return {
    type: TITLE_SEARCH_SUCCESS,
    payload,
  };
}

export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

export function addBookSuccess(payload) {
  return {
    type: ADD_BOOK_SUCCESS,
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
