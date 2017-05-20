/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RETRIEVE_AVAILABLE_BOOKS_SUCCESS,
  REQUEST_TRADE_SUCCESS,
} from './constants';

const initialState = fromJS({
  availableBooks: [],
});

function HeaderReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_AVAILABLE_BOOKS_SUCCESS:
      return state.set('availableBooks', fromJS(action.payload));
    case REQUEST_TRADE_SUCCESS: {
      const bookList = state.get('availableBooks');
      const filteredBookList = bookList.filter((item) => item.get('_id') !== action.payload._id); // eslint-disable-line no-underscore-dangle
      return state.set('availableBooks', filteredBookList);
    }
    default:
      return state;
  }
}

export default HeaderReducer;
