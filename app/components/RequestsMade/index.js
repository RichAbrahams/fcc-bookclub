/**
*
* RequestsMade
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
  Button,
  ButtonWrapper,
  SectionTitle,
  TitleNoneFound,
} from '../../globalStyledComponents';

const listGroupItems = (requestsMade, cancelRequest) => requestsMade.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          <li>Owner:&nbsp;&nbsp;&nbsp;{item.owner}</li>
          <ButtonWrapper>
            <Button width="124px" onClick={() => cancelRequest(item._id)}>Cancel request</Button>
          </ButtonWrapper>
        </DetailsList>
      </DetailsWrapper>
      <ImageWrapper className="image-wrapper">{item.thumbnail && <Img src={item.thumbnail} />}</ImageWrapper>
    </SubWrapper>
  </CardWrapper>
  );

const noReqs = () => (
  <CardWrapper>
    <TitleNoneFound>No requests found</TitleNoneFound>
  </CardWrapper>
);

function RequestsMade({ requestsMade, cancelRequest, slideFrom }) {
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
        <SectionTitle>Requests Made</SectionTitle>
        <UL className="mybooks-ul">
          {requestsMade.length ? listGroupItems(requestsMade, cancelRequest) : noReqs()}
        </UL>
      </Wrapper>
    </CSSTransitionGroup>
  );
}

RequestsMade.propTypes = {
  requestsMade: React.PropTypes.array,
  cancelRequest: React.PropTypes.func,
  slideFrom: React.PropTypes.string,
};

export default RequestsMade;
