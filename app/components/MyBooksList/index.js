/**
*
* MyBooksList
*
*/
/* eslint no-underscore-dangle:0 */
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
  TitleNoneFound,
  ButtonWrapper,
  Button,
} from '../../globalStyledComponents';

const listGroupItems = (myBooks, deleteBook) => myBooks.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          {item.requested_by && <li>Requested by {item.requested_by}</li>}
          {item.loaned_to && <li>On loan to {item.loaned_to}</li>}
          <ButtonWrapper>
            <Button onClick={() => deleteBook(item._id)}>Delete from collection</Button>
          </ButtonWrapper>
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

const noBooks = () => (
  <CardWrapper>
    <TitleNoneFound>You have no books</TitleNoneFound>
  </CardWrapper>
);

function MyBooksList({ myBooks, slideFrom, deleteBook }) {
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
        <UL className="mybooks-ul">
          {myBooks.length ? listGroupItems(myBooks, deleteBook) : noBooks()}
        </UL>
      </Wrapper>
    </CSSTransitionGroup>
  );
}

MyBooksList.propTypes = {
  myBooks: React.PropTypes.array,
  slideFrom: React.PropTypes.string,
  deleteBook: React.PropTypes.func,
};

export default MyBooksList;
