/**
*
* Logo
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import { H1, Wrapper } from './styles';

function Logo() {
  return (
    <Wrapper className="logo-wrapper">
      <H1>
        Book Traders &nbsp;
      </H1>
      <FontAwesome
        name="book"
        size="2x"
      />
    </Wrapper>
  );
}

export default Logo;
