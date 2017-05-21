/*
 *
 * Header reducer
 *
 */


import { fromJS } from 'immutable';
import {
  SIGN_IN_SUCCESS,
} from '../SignIn/constants';

import {
  SIGN_UP_SUCCESS,
} from '../SignUp/constants';

import {
  SIGN_OUT,
} from '../SignOut/constants';

import {
  TOGGLE_EXPAND_NAV,
} from './constants';

import {
  UPDATE_PROFILE_SUCCESS,
} from '../Profile/constants';

const initialState = fromJS({
  username: null,
  email: null,
  city: null,
  state: null,
  token: null,
  expandNav: false,
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EXPAND_NAV: {
      const current = state.get('expandNav');
      return state.set('expandNav', !current);
    }
    case SIGN_IN_SUCCESS:
      return state.merge(action.payload);
    case SIGN_UP_SUCCESS:
      return state.merge(action.payload);
    case SIGN_OUT:
      return state.set('username', null)
                  .set('email', null)
                  .set('city', null)
                  .set('state', null)
                  .set('token', null);
    case UPDATE_PROFILE_SUCCESS:
      return state.set('email', action.payload.email)
                  .set('city', action.payload.city)
                  .set('state', action.payload.state);
    default:
      return state;
  }
}

export default headerReducer;
