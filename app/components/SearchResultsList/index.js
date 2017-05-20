/**
*
* SearchResultsList
*
*/

import React from 'react';
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
  ButtonWrapper,
  Button,
  SectionTitle,
  TitleNoneFound,
} from '../../globalStyledComponents';

const listGroupItems = (searchResults, addBook) => searchResults.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author: {item.authors}</li>
          <ButtonWrapper>
            <Button width="86px" onClick={() => addBook(item)}>Add Book</Button>
          </ButtonWrapper>
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

const noBooks = () => (
  <CardWrapper>
    <TitleNoneFound>No books found</TitleNoneFound>
  </CardWrapper>
);

function SearchResultsList({ searchResults, addBook }) {
  return (
    <Wrapper className="my-books-wrapper">
      <SectionTitle>Books Found</SectionTitle>
      <UL className="mybooks-ul">
        {searchResults.length ? listGroupItems(searchResults, addBook) : noBooks()}
      </UL>
    </Wrapper>
  );
}

SearchResultsList.propTypes = {
  searchResults: React.PropTypes.array,
  addBook: React.PropTypes.func,
};

export default SearchResultsList;
