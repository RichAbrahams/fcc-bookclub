/**
*
* ProfileForm
*
*/
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import FontAwesome from 'react-fontawesome';
import { Form, FieldContainer, FormWrapper, FormSubWrapper, Label, TextInput, Button, ErrorMsg, CardTitle, Title } from '../../globalStyledComponents';

const validate = (values) => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('city')) {
    errors.city = 'Required';
  }
  if (!values.get('email')) {
    errors.state = 'Required';
  }
  return errors;
};

const renderTextField = ({ input, label, type, meta: { touched, error }, placeholder, disabled }) => (
  <FieldContainer controlId={input.name}>
    <Label>{label}</Label>
    <TextInput type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} disabled={disabled} />
    {touched && error && <ErrorMsg className="text-danger">{error}</ErrorMsg>}
  </FieldContainer>
  );

function ProfileForm({ error, handleSubmit, submitting }) {
  return (
    <FormWrapper className="form-wrapper">
      <CardTitle className="title">
        <Title className="title">Change Profile</Title>
      </CardTitle>
      <FormSubWrapper className="form-subwrapper">
        <Form onSubmit={handleSubmit}>
          <Field name="username" component={renderTextField} label="Username" placeholder="Enter username" type="text" disabled />
          <Field name="email" component={renderTextField} label="Email" placeholder="Enter email" type="text" />
          <Field name="city" component={renderTextField} label="City" placeholder="Enter city" type="text" />
          <Field name="state" component={renderTextField} label="State" placeholder="Enter state" type="text" />
          <div className="button-wrapper">
            <Button width="6em" type="submit" disabled={submitting}>{submitting ?
              <FontAwesome
                name="refresh"
                spin
              />
              :
              'Update'
              }
            </Button>
          </div>
          {error && <ErrorMsg className="text-danger">{error}</ErrorMsg>}
        </Form>
      </FormSubWrapper>
    </FormWrapper>
  );
}

ProfileForm.propTypes = {
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
  disabled: React.PropTypes.bool,
};

ProfileForm = reduxForm({ //eslint-disable-line
  form: 'EditNewOrder',
  validate,
})(ProfileForm);

ProfileForm = connect((state) => ({ //eslint-disable-line
  initialValues: state.get('header').toJS(),
}))(ProfileForm);

export default ProfileForm;
