import { createSelector } from 'reselect';

const selectHeaderDomain = () => (state) => state.get('header');

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username')
);

const selectToken = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('token')
);

const selectExpandNav = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('expandNav')
);

export {
  selectUsername,
  selectToken,
  selectExpandNav,
};
