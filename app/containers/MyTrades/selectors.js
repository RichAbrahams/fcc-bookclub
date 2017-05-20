import { createSelector } from 'reselect';

const selectMyTradesDomain = () => (state) => state.get('myTrades');

const selectHeaderDomain = () => (state) => state.get('header');

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username')
);

const selectMyActiveTrades = () => createSelector(
  selectMyTradesDomain(),
  (substate) => substate.get('myActiveTrades').toJS()
);

const selectActiveNavKey = () => createSelector(
  selectMyTradesDomain(),
  (substate) => substate.get('activeNavKey')
);

const selectSlideFrom = () => createSelector(
  selectMyTradesDomain(),
  (substate) => substate.get('slideFrom')
);

const selectRequestsMade = () => createSelector(
  selectMyTradesDomain(),
  selectUsername(),
  (substate, username) => substate.get('myActiveTrades')
                        .filter((item) => item.get('requested_by') === username)
                        .toJS()
);

const selectRequestsReceived = () => createSelector(
  selectMyTradesDomain(),
  selectUsername(),
  (substate, username) => substate.get('myActiveTrades')
                        .filter((item) => item.get('owner') === username)
                        .filter((item) => item.get('requested_by'))
                        .toJS()
);

const selectBooksLoaned = () => createSelector(
  selectMyTradesDomain(),
  selectUsername(),
  (substate, username) => substate.get('myActiveTrades')
                        .filter((item) => item.get('owner') === username)
                        .filter((item) => item.get('loaned_to'))
                        .toJS()
);

const selectBooksReceived = () => createSelector(
  selectMyTradesDomain(),
  selectUsername(),
  (substate, username) => substate.get('myActiveTrades')
                                  .filter((item) => item.get('loaned_to') === username)
                                  .toJS()
);

export {
  selectMyActiveTrades,
  selectActiveNavKey,
  selectSlideFrom,
  selectRequestsMade,
  selectRequestsReceived,
  selectBooksLoaned,
  selectBooksReceived,
};
