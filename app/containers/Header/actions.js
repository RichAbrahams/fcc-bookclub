/*
 *
 * Header actions
 *
 */
import {
  TOGGLE_EXPAND_NAV,
} from './constants';

export function toggleExpandNav() {
  return {
    type: TOGGLE_EXPAND_NAV,
  };
}
