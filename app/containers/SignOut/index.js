/*
 *
 * SignOut
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as actions from './actions';
import { CenteredWrapper, PageTitle, LinkStyled } from '../../globalStyledComponents';

export class SignOut extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <CenteredWrapper>
        <Helmet
          title="SignOut"
          meta={[
            { name: 'description', content: 'Description of SignOut' },
          ]}
        />
        <PageTitle>
          You are now signed out.
        </PageTitle>
        <LinkStyled to="/signin">Sign back in</LinkStyled>
      </CenteredWrapper>
    );
  }
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(actions.signOut()),
  };
}

export default connect(null, mapDispatchToProps)(SignOut);
