/*
 *
 * MyTrades
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import RequestsMade from 'components/RequestsMade';
import RequestsReceived from 'components/RequestsReceived';
import BooksLoaned from 'components/BooksLoaned';
import BooksReceived from 'components/BooksReceived';
import MyTradesTabs from 'components/MyTradesTabs';
import FontAwesome from 'react-fontawesome';
import * as selectors from './selectors';
import * as actions from './actions';
import { Wrapper } from '../../globalStyledComponents';
import { NavControl, TitleWrapper, NavPageTitle } from './styles';

export class MyTrades extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.retrieveMyTrades();
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="MyTrades"
          meta={[
            { name: 'My Trades', content: 'My book trades' },
          ]}
        />
        <TitleWrapper className="title-wrapper">
          <NavControl className="nav-left" onClick={() => this.props.decrementNav()}>
            <FontAwesome name="chevron-left" />
          </NavControl>
          <NavPageTitle className="mytrades-header">My Trades</NavPageTitle>
          <NavControl className="nav-right" onClick={() => this.props.incrementNav()}>
            <FontAwesome name="chevron-right" />
          </NavControl>
        </TitleWrapper>
        <MyTradesTabs {...this.props} />
        { this.props.activeNavKey === 1 && <RequestsMade {...this.props} key="1" />}
        { this.props.activeNavKey === 2 && <RequestsReceived {...this.props} key="2" />}
        { this.props.activeNavKey === 3 && <BooksLoaned {...this.props} key="3" />}
        { this.props.activeNavKey === 4 && <BooksReceived {...this.props} key="4" />}
      </Wrapper>
    );
  }
}

MyTrades.propTypes = {
  retrieveMyTrades: PropTypes.func.isRequired,
  activeNavKey: PropTypes.number.isRequired,
  decrementNav: PropTypes.func.isRequired,
  incrementNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myActiveTrades: selectors.selectMyActiveTrades(),
  activeNavKey: selectors.selectActiveNavKey(),
  slideFrom: selectors.selectSlideFrom(),
  requestsMade: selectors.selectRequestsMade(),
  requestsReceived: selectors.selectRequestsReceived(),
  booksLoaned: selectors.selectBooksLoaned(),
  booksReceived: selectors.selectBooksReceived(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeActiveNavKey: (payload) => dispatch(actions.changeActiveNavKey(payload)),
    incrementNav: () => dispatch(actions.incrementActiveNavKey()),
    decrementNav: () => dispatch(actions.decrementActiveNavKey()),
    retrieveMyTrades: () => dispatch(actions.retrieveMyTrades()),
    cancelRequest: (payload) => dispatch(actions.cancelRequest(payload)),
    approveRequest: (payload) => dispatch(actions.approveRequest(payload)),
    declineRequest: (payload) => dispatch(actions.declineRequest(payload)),
    setToReturned: (payload) => dispatch(actions.setToReturned(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTrades);
