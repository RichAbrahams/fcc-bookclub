/**
*
* ResetPasswordForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FontAwesome from 'react-fontawesome';
import { Form, FieldContainer, FormWrapper, FormSubWrapper, Label, TextInput, Button, ErrorMsg, CardTitle, Title } from '../../globalStyledComponents';

const validate = (values) => {
  const errors = {};
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  if (!values.get('confirm')) {
    errors.confirm = 'Required';
  }
  if (values.get('password') !== values.get('confirm')) {
    errors.password = 'Passwords do not match';
    errors.confirm = 'Passwords do not match';
  }
  return errors;
};

const renderTextField = ({ input, label, type, meta: { touched, error }, placeholder }) => (
  <FieldContainer>
    <Label>{label}</Label>
    <TextInput type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
    {touched && error && <ErrorMsg className="text-danger">{error}</ErrorMsg>}
  </FieldContainer>
  );

function ResetPasswordForm({ error, handleSubmit, submitting }) {
  return (
    <FormWrapper className="form-wrapper">
      <CardTitle className="title">
        <Title className="title">Reset Password</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <Form onSubmit={handleSubmit}>
          <Field name="password" component={renderTextField} label="New Password" placeholder="Enter password" type="password" />
          <Field name="confirm" component={renderTextField} label="Confirm New Password" placeholder="Enter password" type="password" />
          <div className="button-wrapper">
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

ResetPasswordForm.propTypes = {
  error: React.PropTypes.object,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
};

renderTextField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object,
  placeholder: React.PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'ResetPassword',
  validate,
})(ResetPasswordForm);
