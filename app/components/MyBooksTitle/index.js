/**
*
* MyBooksTitle
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavControl, TitleWrapper, NavPageTitle } from '../../globalStyledComponents';

function MyBooksTitle({ decrementNav, incrementNav }) {
  return (
    <TitleWrapper className="title-wrapper">
      <NavControl className="nav-left" onClick={() => decrementNav()}>
        <FontAwesome name="chevron-left" />
      </NavControl>
      <NavPageTitle className="mytrades-header">My Books</NavPageTitle>
      <NavControl className="nav-right" onClick={() => incrementNav()}>
        <FontAwesome name="chevron-right" />
      </NavControl>
    </TitleWrapper>
  );
}

MyBooksTitle.propTypes = {
  decrementNav: React.PropTypes.func.isRequired,
  incrementNav: React.PropTypes.func.isRequired,
};

export default MyBooksTitle;
