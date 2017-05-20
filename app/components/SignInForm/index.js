/**
*
* SignInForm
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
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
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

function SignInForm({ error, handleSubmit, submitting }) {
  return (
    <FormWrapper className="form-wrapper">
      <CardTitle className="title">
        <Title className="title">Sign In</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <Form onSubmit={handleSubmit}>
          <p>Test users (email / password):</p>
          <ul>
            <li>test1@test.com / password</li>
            <li>test2@test.com / password</li>
            <li>test3@test.com / password</li>
            <li>test4@test.com / password</li>
          </ul>
          <hr />
          <Field name="email" component={renderTextField} label="Email" placeholder="Enter email" type="text" />
          <Field name="password" component={renderTextField} label="Password" placeholder="Enter password" type="password" />
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

SignInForm.propTypes = {
  error: React.PropTypes.oneOf([React.PropTypes.string, React.PropTypes.object]),
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
  form: 'SignIn', // a unique identifier for this form
  validate,
})(SignInForm);
