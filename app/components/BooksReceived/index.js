/**
*
* BooksReceived
*
*/
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
  SectionTitle,
  TitleNoneFound,
} from '../../globalStyledComponents';

const listGroupItems = (booksReceived) => booksReceived.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          <li>Owned by {item.loaned_to}</li>
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

const noReqs = () => (
  <CardWrapper>
    <TitleNoneFound>No books received</TitleNoneFound>
  </CardWrapper>
);

function BooksReceived({ booksReceived, slideFrom }) {
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
        <SectionTitle>Books Received</SectionTitle>
        <UL className="mybooks-ul">
          {booksReceived.length ? listGroupItems(booksReceived) : noReqs()}
        </UL>
      </Wrapper>
    </CSSTransitionGroup>
  );
}

BooksReceived.propTypes = {
  booksReceived: React.PropTypes.array,
  slideFrom: React.PropTypes.string,
};

export default BooksReceived;
