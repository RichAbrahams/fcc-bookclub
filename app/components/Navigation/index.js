/**
*
* Navigation
*
*/

import React from 'react';
import { UL, LI, LiWrapper, NavWrapper } from './styles';

const expandTo = (username) => username ? '240px' : '96px';

function Navigation(props) {
  const { username, handleSelect, expandNav, toggleNav } = props;
  return (
    <NavWrapper className="nav-wrapper" expandNav={expandNav} expandTo={expandTo(username)}>
      {!username && <UL className="header-ul">
        <LiWrapper onClick={() => handleSelect('/', toggleNav)} className="li-wrapper">
          <LI className="header-li"><h3>Available Books</h3></LI>
        </LiWrapper>
        <LiWrapper onClick={() => handleSelect('/signin', toggleNav)} className="li-wrapper">
          <LI className="header-li"><h3>Sign in</h3></LI>
        </LiWrapper>
        <LiWrapper onClick={() => handleSelect('/signup', toggleNav)} >
          <LI className="header-li"><h3>Sign up</h3></LI>
        </LiWrapper>
      </UL>
      }
      {username && <UL className="header-ul">
        <LiWrapper onClick={() => handleSelect('/', toggleNav)} className="li-wrapper">
          <LI className="header-li"><h3>Available Books</h3></LI>
        </LiWrapper>
        <LiWrapper onClick={() => handleSelect('/mybooks', toggleNav)} className="li-wrapper">
          <LI className="header-li"><h3>My Books</h3></LI>
        </LiWrapper>
        <LiWrapper onClick={() => handleSelect('/mytrades', toggleNav)} className="li-wrapper">
          <LI className="header-li"><h3>My Trades</h3></LI>
        </LiWrapper >
        <LiWrapper onClick={() => handleSelect('/profile', toggleNav)}className="li-wrapper">
          <LI className="header-li"><h3>Profile</h3></LI>
        </LiWrapper >
        <LiWrapper onClick={() => handleSelect('/signout', toggleNav)}className="li-wrapper">
          <LI className="header-li"><h3>Sign Out</h3></LI>
        </LiWrapper>
      </UL>
      }
    </NavWrapper>
  );
}

Navigation.propTypes = {
  username: React.PropTypes.string,
  handleSelect: React.PropTypes.func.isRequired,
  expandNav: React.PropTypes.bool,
  toggleNav: React.PropTypes.func.isRequired,
};

export default Navigation;
