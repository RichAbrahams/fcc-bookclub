/**
*
* PasswordResetDone
*
*/

import React from 'react';
import { FormWrapper, CenteredSubWrapper, CardTitle, Title, LinkStyled } from '../../globalStyledComponents';

function PasswordResetDone() {
  return (
    <FormWrapper className="form-wrapper">
      <CardTitle className="title">
        <Title className="title">Reset Password</Title>
      </CardTitle>
      <CenteredSubWrapper className="centered-subwrapper">
        <h3>Your password has been successfully reset.</h3>
        <LinkStyled to="/signin">Sign in</LinkStyled>
      </CenteredSubWrapper>
    </FormWrapper>
  );
}

PasswordResetDone.propTypes = {

};
export default PasswordResetDone;
