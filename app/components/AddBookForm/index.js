
import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FontAwesome from 'react-fontawesome';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Form, FieldContainer, FormWrapper, FormSubWrapper, Label, TextInput, Button, ErrorMsg, CardTitle, Title } from '../../globalStyledComponents';

const validate = (values) => {
  const errors = {};
  if (!values.get('title')) {
    errors.title = 'Required';
  }
  return errors;
};

const renderTextField = ({ input, label, type, meta: { touched, error }, placeholder }) => (
  <FieldContainer controlId={input.name}>
    <Label>{label}</Label>
    <TextInput type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
    {touched && error && <ErrorMsg>{error}</ErrorMsg>}
  </FieldContainer>
  );

function AddBookForm({ error, handleSubmit, submitting, slideFrom }) {
  return (
    <CSSTransitionGroup
      transitionName={slideFrom}
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
      component="div"
    >
      <FormWrapper className="form-wrapper">
        <CardTitle className="title">
          <Title className="title">Add Book</Title>
        </CardTitle>
        <FormSubWrapper className="form-subwrapper">
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              component={renderTextField}
              label="Title"
              placeholder="title"
              type="text"
            />
            <div>
              <div className="button-wrapper">
                <Button width="67px" type="Search" disabled={submitting}>{submitting
                  ? <FontAwesome name="refresh" spin />
                  : 'Search'
              }
                </Button>
              </div>
            </div>
            {error && <span className="text-danger">{error}</span>}
          </Form>
        </FormSubWrapper>
      </FormWrapper>
    </CSSTransitionGroup>
  );
}

AddBookForm.propTypes = {
  error: React.PropTypes.object,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  slideFrom: React.PropTypes.string,
};

renderTextField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object,
  placeholder: React.PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'AddBook',
  validate,
})(AddBookForm);

