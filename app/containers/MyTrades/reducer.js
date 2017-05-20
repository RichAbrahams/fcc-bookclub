/*
 *
 * MyTrades reducer
 *
 */
/* eslint no-underscore-dangle:0 */
import { fromJS } from 'immutable';
import {
  CHANGE_ACTIVE_NAV_KEY,
  INCREMENT_ACTIVE_NAV_KEY,
  DECREMENT_ACTIVE_NAV_KEY,
  RETRIEVE_MY_TRADES_SUCCESS,
  CANCEL_REQUEST_SUCCESS,
  APPROVE_REQUEST_SUCCESS,
  DECLINE_REQUEST_SUCCESS,
  SET_TO_RETURNED_SUCCESS,
} from './constants';

const initialState = fromJS({
  myActiveTrades: [],
  activeNavKey: 1,
  slideFrom: 'left',
});

function myTradesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_NAV_KEY:
      return state.set('activeNavKey', action.payload);
    case INCREMENT_ACTIVE_NAV_KEY: {
      const current = state.get('activeNavKey');
      const next = current === 4 ? 1 : current + 1;
      return state.set('activeNavKey', next)
                  .set('slideFrom', 'left');
    }
    case DECREMENT_ACTIVE_NAV_KEY: {
      const current = state.get('activeNavKey');
      const next = current === 1 ? 4 : current - 1;
      return state.set('activeNavKey', next)
                  .set('slideFrom', 'right');
    }
    case RETRIEVE_MY_TRADES_SUCCESS:
      return state.set('myActiveTrades', fromJS(action.payload));
    case CANCEL_REQUEST_SUCCESS: {
      const newBookList = state.get('myActiveTrades')
                              .filter((item) => item.get('_id') !== action.payload);
      return state.set('myActiveTrades', fromJS(newBookList));
    }
    case APPROVE_REQUEST_SUCCESS: {
      const bookList = state.get('myActiveTrades')
                            .filter((item) => item.get('_id') !== action.payload._id);
      const newBookList = bookList.insert(bookList.size, fromJS(action.payload));
      return state.set('myActiveTrades', newBookList);
    }
    case DECLINE_REQUEST_SUCCESS: {
      const newBookList = state.get('myActiveTrades')
                              .filter((item) => item.get('_id') !== action.payload);
      return state.set('myActiveTrades', fromJS(newBookList));
    }
    case SET_TO_RETURNED_SUCCESS: {
      const newBookList = state.get('myActiveTrades')
                              .filter((item) => item.get('_id') !== action.payload);
      return state.set('myActiveTrades', fromJS(newBookList));
    }
    default:
      return state;
  }
}

export default myTradesReducer;
