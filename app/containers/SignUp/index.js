/*
 *
 * SignUp
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignUpForm from 'components/SignUpForm';
import Helmet from 'react-helmet';
import { Wrapper } from '../../globalStyledComponents';
import * as actions from './actions';

export class SignUp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .signUp({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper className="signup-wrapper">
        <Helmet
          title="Sign Up"
          meta={[
            { name: 'Sign Up', content: 'Sign up form' },
          ]}
        />
        <SignUpForm {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />
      </Wrapper>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    signUp: (payload) => dispatch(actions.signUp(payload)),
  };
}

export default connect(null, mapDispatchToProps)(SignUp);
