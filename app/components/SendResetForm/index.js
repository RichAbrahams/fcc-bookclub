/**
*
* SendResetForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FontAwesome from 'react-fontawesome';
import { Form, FieldContainer, FormWrapper, FormSubWrapper, TextInput, Button, ErrorMsg, CardTitle, Title } from '../../globalStyledComponents';

const renderTextField = ({ input, type, meta: { touched, error }, placeholder }) => (
  <FieldContainer>
    <TextInput type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
    {touched && error && <ErrorMsg className="text-danger">{error}</ErrorMsg>}
  </FieldContainer>
  );

function SendResetForm({ error, handleSubmit, submitting }) {
  return (
    <FormWrapper>
      <CardTitle className="title">
        <Title className="title">Reset Password</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <Form onSubmit={handleSubmit}>
          <h3>Please enter your username, we will email you a password reset link.</h3>
          <Field name="username" component={renderTextField} label="Username" placeholder="username" type="text" />
          <div>
            <Button width="6em" type="submit" disabled={submitting}>{submitting ?
              <FontAwesome
                name="refresh"
                spin
              />
              :
              'Submit'
              }
            </Button>
          </div>
          {error && <ErrorMsg className="text-danger">{error}</ErrorMsg>}
        </Form>
      </FormSubWrapper>
    </FormWrapper>
  );
}

SendResetForm.propTypes = {
  error: React.PropTypes.object,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
};

renderTextField.propTypes = {
  input: React.PropTypes.object,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object,
  placeholder: React.PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'SendReset',
})(SendResetForm);
