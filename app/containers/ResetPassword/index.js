/*
 *
 * ResetPassword
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from 'components/ResetPasswordForm';
import PasswordResetDone from 'components/PasswordResetDone';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import * as selectors from './selectors';
import * as actions from './actions';
import { Wrapper } from '../../globalStyledComponents';

export class ResetPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .submitNewPassword({ token: this.props.location.query.token, data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="Reset Password"
          meta={[{
            name: 'Reset Password',
            content: 'Reset Password',
          },
          ]}
        />
        {!this.props.submitSuccess && <ResetPasswordForm {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />}
        {this.props.submitSuccess && <PasswordResetDone />}
      </Wrapper>
    );
  }
}

ResetPassword.propTypes = {
  submitNewPassword: React.PropTypes.func,
  submitSuccess: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  submitSuccess: selectors.selectSubmitSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitNewPassword: (payload) => dispatch(actions.submitNewPassword(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
