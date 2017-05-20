/*
 *
 * SendReset
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import SendResetForm from 'components/SendResetForm';
import ResetEmailSent from 'components/ResetEmailSent';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors';
import { Wrapper } from '../../globalStyledComponents';

export class SendReset extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillUnmount() {
    this.props.resetState();
  }

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .submitPasswordResetUsername({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper className="sendreset-wrapper">
        <Helmet
          title="Send Password Reset"
          meta={[{
            name: 'Send Password Reset',
            content: 'Send Password Reset',
          },
          ]}
        />
        {!this.props.emailSent && <SendResetForm {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />}
        {this.props.emailSent && <ResetEmailSent />}
      </Wrapper>
    );
  }
}

SendReset.propTypes = {
  submitPasswordResetUsername: PropTypes.func.isRequired,
  emailSent: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailSent: selectors.selectEmailSent(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitPasswordResetUsername: (payload) => dispatch(actions.submitPasswordResetUsername(payload)),
    resetState: () => dispatch(actions.resetState()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SendReset);
