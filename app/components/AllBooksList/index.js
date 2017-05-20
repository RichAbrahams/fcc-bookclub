/**
*
* AllBooksList
*
*/

/* eslint no-underscore-dangle:0 */

import React from 'react';
import { Wrapper, UL, CardWrapper, CardTitle, Title, DetailsWrapper, DetailsList, ImageWrapper, Img, SubWrapper, Button } from '../../globalStyledComponents';

const listGroupItems = (availableBooks, requestTrade, username) => availableBooks.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          <li>Owner:&nbsp;&nbsp;&nbsp;{item.owner}</li>
          {(username && item.owner !== username) && <Button width="158px" onClick={() => requestTrade(item._id)}>Request Loan</Button>}
          {!username && <br />}
          {!username && <li>Sign in to request trade</li>}
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

function AllBooksList({ availableBooks, requestTrade, username }) {
  return (
    <Wrapper className="all-books-wrapper">
      <UL className="all-books-ul">
        {listGroupItems(availableBooks, requestTrade, username)}
      </UL>
    </Wrapper>
  );
}

AllBooksList.propTypes = {
  availableBooks: React.PropTypes.array,
  requestTrade: React.PropTypes.func,
  username: React.PropTypes.string,
};

export default AllBooksList;
