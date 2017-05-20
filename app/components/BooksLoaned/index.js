/**
*
* BooksLoaned
*
*/

/* eslint no-underscore-dangle:0*/

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  Wrapper,
  UL,
  CardWrapper,
  CardTitle,
  Title,
  DetailsWrapper,
  DetailsList,
  ImageWrapper,
  Img,
  SubWrapper,
  Button,
  ButtonWrapper,
  SectionTitle,
  TitleNoneFound,
} from '../../globalStyledComponents';

const listGroupItems = (booksLoaned, setToReturned) => booksLoaned.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          <li>Loaned to {item.loaned_to}</li>
          <li>Email: {item.loaned_email}</li>
          <br />
          <li>Email {item.loaned_to} to arrange the trade.</li>
          <li>Click &#39;Book Returned&#39; when your book has been returned.</li>
          <ButtonWrapper>
            <Button width="123px" onClick={() => setToReturned(item._id)}>Book Returned</Button>
          </ButtonWrapper>
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

const noReqs = () => (
  <CardWrapper>
    <TitleNoneFound>No books loaned</TitleNoneFound>
  </CardWrapper>
);

function BooksLoaned({ booksLoaned, setToReturned, slideFrom }) {
  return (
    <CSSTransitionGroup
      transitionName={slideFrom}
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
      component="div"
    >
      <Wrapper className="my-books-wrapper">
        <SectionTitle>Books Loaned</SectionTitle>
        <UL className="mybooks-ul">
          {booksLoaned.length ? listGroupItems(booksLoaned, setToReturned) : noReqs()}
        </UL>
      </Wrapper>
    </CSSTransitionGroup>
  );
}

BooksLoaned.propTypes = {
  booksLoaned: React.PropTypes.array,
  setToReturned: React.PropTypes.func,
  slideFrom: React.PropTypes.string,
};

export default BooksLoaned;
