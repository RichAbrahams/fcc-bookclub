import { createSelector } from 'reselect';

/**
 * Direct selector to the myBooks state domain
 */
const selectMyBooksDomain = () => (state) => state.get('myBooks');

const selectMyBooks = () => createSelector(
  selectMyBooksDomain(),
  (substate) => substate.get('myBooks').toJS()
);

const selectSearchResults = () => createSelector(
  selectMyBooksDomain(),
  (substate) => substate.get('searchResults').toJS()
);

const selectActiveNavKey = () => createSelector(
  selectMyBooksDomain(),
  (substate) => substate.get('activeNavKey')
);

const selectSlideFrom = () => createSelector(
  selectMyBooksDomain(),
  (substate) => substate.get('slideFrom')
);


export {
  selectMyBooks,
  selectSearchResults,
  selectActiveNavKey,
  selectSlideFrom,
};
