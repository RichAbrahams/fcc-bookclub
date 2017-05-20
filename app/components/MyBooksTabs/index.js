/**
*
* MyBooksTabs
*
*/

import React from 'react';
import { UL, LI, LiOnWrapper, LiOffWrapper, NavWrapper } from './styles';

function MyBooksTabs({ changeActiveNavKey, activeNavKey }) {
  return (
    <NavWrapper>
      <UL>
        { activeNavKey === 1 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(1)} className="li-wrapper">
            <LI className="header-li">My Books</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(1)} className="li-wrapper">
            <LI className="header-li">My Books</LI>
          </LiOffWrapper>
        }
        { activeNavKey === 2 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(2)} className="li-wrapper">
            <LI className="header-li">Add Book</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(2)} className="li-wrapper">
            <LI className="header-li">Add Book</LI>
          </LiOffWrapper>
        }
      </UL>
    </NavWrapper>
  );
}

MyBooksTabs.propTypes = {
  changeActiveNavKey: React.PropTypes.func,
  activeNavKey: React.PropTypes.number,
};

export default MyBooksTabs;
