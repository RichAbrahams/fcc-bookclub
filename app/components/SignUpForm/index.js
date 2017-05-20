/**
*
* SignUpForm
*
*/
import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FontAwesome from 'react-fontawesome';
import { Form, FieldContainer, FormWrapper, FormSubWrapper, Label, TextInput, Button, ErrorMsg, CardTitle, Title } from '../../globalStyledComponents';

const validate = (values) => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  }
  if (!values.get('city')) {
    errors.city = 'Required';
  }
  if (!values.get('state')) {
    errors.state = 'Required';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  if (!values.get('confirm')) {
    errors.confirm = 'Required';
  }
  if (values.get('confirm') !== values.get('password')) {
    errors.confirm = 'Passwords do not match';
    errors.password = 'Passwords do not match';
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

function SignUpForm({ error, handleSubmit, submitting }) {
  return (
    <FormWrapper>
      <CardTitle className="title">
        <Title className="title">Sign Up</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <Form onSubmit={handleSubmit}>
          <Field name="username" component={renderTextField} label="Username" placeholder="Enter username" type="text" />
          <Field name="email" component={renderTextField} label="Email" placeholder="Enter email" type="text" />
          <Field name="city" component={renderTextField} label="City" placeholder="Enter city" type="text" />
          <Field name="state" component={renderTextField} label="State" placeholder="Enter state" type="text" />
          <Field name="password" component={renderTextField} label="Password" placeholder="Enter password" type="password" />
          <Field name="confirm" component={renderTextField} label="Confirm Password" placeholder="Enter password" type="password" />
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

SignUpForm.propTypes = {
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
  form: 'SignUp', // a unique identifier for this form
  validate,
})(SignUpForm);
