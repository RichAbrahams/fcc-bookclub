/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Navigation from 'components/Navigation';
import FontAwesome from 'react-fontawesome';
import Logo from 'components/Logo';
import { createStructuredSelector } from 'reselect';
import * as selectors from './selectors';
import * as actions from './actions';
import { Wrapper, ShowNavWrapper } from './styles';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSelect(selectedKey, toggleNav) {
    toggleNav();
    browserHistory.push(selectedKey);
  }

  render() {
    return (
      <Wrapper className="header-wrapper">
        <Logo />
        <ShowNavWrapper className="show-nav-wrapper">
          <button onClick={() => this.props.toggleNav()}>
            <FontAwesome name="bars" size="2x" />
          </button>
        </ShowNavWrapper>
        <Navigation {...this.props} handleSelect={this.handleSelect} />
      </Wrapper>
    );
  }
}

Header.propTypes = {
  toggleNav: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: selectors.selectUsername(),
  expandNav: selectors.selectExpandNav(),
});


function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(actions.toggleExpandNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
