/*
 *
 * MyBooks reducer
 *
 */
/* eslint no-underscore-dangle:0 */

import { fromJS } from 'immutable';
import {
  RETRIEVE_MY_BOOKS_SUCCESS,
  DELETE_MY_BOOK_SUCCESS,
  TITLE_SEARCH_SUCCESS,
  CHANGE_ACTIVE_NAV_KEY,
  ADD_BOOK_SUCCESS,
  INCREMENT_ACTIVE_NAV_KEY,
  DECREMENT_ACTIVE_NAV_KEY,
} from './constants';

const initialState = fromJS({
  myBooks: [],
  activeNavKey: 1,
  slideFrom: 'left',
  searchResults: [],
});

function myBooksReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_MY_BOOKS_SUCCESS:
      return state.set('myBooks', fromJS(action.payload));
    case DELETE_MY_BOOK_SUCCESS: {
      const newMyBooks = state.get('myBooks')
                              .filter((item) => item.get('_id') !== action.payload);
      return state.set('myBooks', newMyBooks);
    }
    case CHANGE_ACTIVE_NAV_KEY:
      return state.set('activeNavKey', action.payload);
    case INCREMENT_ACTIVE_NAV_KEY: {
      const current = state.get('activeNavKey');
      const next = current === 1 ? 2 : 1;
      return state.set('activeNavKey', next)
                  .set('slideFrom', 'left');
    }
    case DECREMENT_ACTIVE_NAV_KEY: {
      const current = state.get('activeNavKey');
      const next = current === 2 ? 1 : 2;
      return state.set('activeNavKey', next)
                  .set('slideFrom', 'right');
    }
    case TITLE_SEARCH_SUCCESS:
      return state.set('searchResults', fromJS(action.payload));
    case ADD_BOOK_SUCCESS: {
      const bookList = state.get('myBooks');
      const newBookList = bookList.insert(bookList.size, fromJS(action.payload));
      return state.set('myBooks', newBookList).set('activeNavKey', 1).set('searchResults', fromJS([]));
    }
    default:
      return state;
  }
}

export default myBooksReducer;
