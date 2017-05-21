/*
 *
 * Profile
 *
 */


import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ChangePasswordForm from 'components/ChangePasswordForm';
import ProfileForm from 'components/ProfileForm';
import toastr from 'toastr';
import * as actions from './actions';
import { Wrapper } from '../../globalStyledComponents';

export class Profile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleProfileSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .updateProfile({ data: payload, resolve, reject });
    });
  }

  handlePasswordSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .updatePassword({ data: payload, resolve, reject });
    }).then(() => {
      toastr.success('password updated');
    });
  }

  render() {
    return (
      <Wrapper className="profile-wrapper">
        <Helmet
          title="Profile"
          meta={[{
            name: 'Profile',
            content: 'Profile',
          },
          ]}
        />
        <ProfileForm {...this.props} onSubmit={(payload) => this.handleProfileSubmit(payload)} />
        <ChangePasswordForm {...this.props} onSubmit={(payload) => this.handlePasswordSubmit(payload)} />
      </Wrapper>
    );
  }
}

Profile.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (payload) => dispatch(actions.updateProfile(payload)),
    updatePassword: (payload) => dispatch(actions.updatePassword(payload)),
  };
}

export default connect(null, mapDispatchToProps)(Profile);
