/*
 *
 * SignIn
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignInForm from 'components/SignInForm';
import Helmet from 'react-helmet';
import { Wrapper, RightWrapper, LinkStyled } from '../../globalStyledComponents';
import * as actions from './actions';

export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .signIn({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper className="signin-wrapper">
        <Helmet
          title="SignIn"
          meta={[
            { name: 'Sign In', content: 'sign in form' },
          ]}
        />
        <SignInForm {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />
        <RightWrapper>
          <LinkStyled to="/signup">Need an account?</LinkStyled>
          <LinkStyled to="/sendreset">Forgotten password?</LinkStyled>
        </RightWrapper>
      </Wrapper>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    signIn: (payload) => dispatch(actions.signIn(payload)),
  };
}

export default connect(null, mapDispatchToProps)(SignIn);
