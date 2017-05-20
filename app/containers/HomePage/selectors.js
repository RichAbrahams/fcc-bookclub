import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('HomePage');

const selectHeaderDomain = () => (state) => state.get('header');

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username')
);

const selectAvailableBooks = () => createSelector(
  selectHomePageDomain(),
  selectUsername(),
  (substate, username) => substate.get('availableBooks')
                                  .filter((item) => item.get('owner') !== username)
                                  .toJS()
);

export {
  selectAvailableBooks,
  selectUsername,
};
