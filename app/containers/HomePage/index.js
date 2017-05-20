/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import AllBooksList from 'components/AllBooksList';
import * as selectors from './selectors';
import * as actions from './actions';
import { Wrapper, PageTitle } from '../../globalStyledComponents';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.retrieveAvailableBooks();
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <PageTitle>Available Books</PageTitle>
        <AllBooksList {...this.props} />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  retrieveAvailableBooks: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  availableBooks: selectors.selectAvailableBooks(),
  username: selectors.selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestTrade: (payload) => dispatch(actions.requestTrade(payload)),
    retrieveAvailableBooks: () => dispatch(actions.retrieveAvailableBooks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
