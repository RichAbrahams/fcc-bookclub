/**
*
* MyTradesTabs
*
*/

import React from 'react';
import { UL, LI, LiOnWrapper, LiOffWrapper, NavWrapper } from './styles';


function MyTradesTabs({ changeActiveNavKey, activeNavKey }) {
  return (
    <NavWrapper>
      <UL>
        { activeNavKey === 1 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(1)} className="li-wrapper">
            <LI className="header-li">Requests Made</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(1)} className="li-wrapper">
            <LI className="header-li">Requests Made</LI>
          </LiOffWrapper>
        }
        { activeNavKey === 2 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(2)} className="li-wrapper">
            <LI className="header-li">Requests Received</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(2)} className="li-wrapper">
            <LI className="header-li">Requests Received</LI>
          </LiOffWrapper>
        }
        { activeNavKey === 3 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(3)} className="li-wrapper">
            <LI className="header-li">Books Loaned</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(3)} className="li-wrapper">
            <LI className="header-li">Books Loaned</LI>
          </LiOffWrapper>
        }
        { activeNavKey === 4 ?
          <LiOnWrapper onClick={() => changeActiveNavKey(4)} className="li-wrapper">
            <LI className="header-li">Books Received</LI>
          </LiOnWrapper>
          :
          <LiOffWrapper onClick={() => changeActiveNavKey(4)} className="li-wrapper">
            <LI className="header-li">Books Received</LI>
          </LiOffWrapper>
        }
      </UL>
    </NavWrapper>
  );
}

MyTradesTabs.propTypes = {
  changeActiveNavKey: React.PropTypes.func,
  activeNavKey: React.PropTypes.number,
};

export default MyTradesTabs;
