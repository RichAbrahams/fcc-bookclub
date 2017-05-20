/**
*
* ResetEmailSent
*
*/

import React from 'react';
import { FormWrapper, FormSubWrapper, CardTitle, Title } from '../../globalStyledComponents';


function ResetEmailSent() {
  return (
    <FormWrapper className="form-wrapper">
      <CardTitle className="title">
        <Title className="title">Reset Password</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <h3>An email containing a password reset link has been sent to your email address.</h3>
      </FormSubWrapper>
    </FormWrapper>
  );
}

ResetEmailSent.propTypes = {

};

export default ResetEmailSent;
