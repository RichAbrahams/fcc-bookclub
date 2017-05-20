/**
*
* RequestsReceived
*
*/

/* eslint no-underscore-dangle: 0 */

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

const listGroupItems = (requestsReceived, approveRequest, declineRequest) => requestsReceived.map((item, index) =>
  <CardWrapper className="list-item" key={index}>
    <CardTitle className="title">
      <Title>{item.title}</Title>
    </CardTitle>
    <SubWrapper className="sub-wrapper">
      <DetailsWrapper className="details-wrapper">
        <DetailsList>
          <li>Author:&nbsp;&nbsp;&nbsp;{item.authors}</li>
          <li>Requested by {item.requested_by}</li>
          <ButtonWrapper>
            <Button width="76px" onClick={() => approveRequest(item)}>Approve</Button>
            <Button width="70px" onClick={() => declineRequest(item._id)}>Decline</Button>
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

function RequestsReceived({ requestsReceived, approveRequest, declineRequest, slideFrom }) {
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
        <SectionTitle>Requests Received</SectionTitle>
        <UL className="mybooks-ul">
          {requestsReceived.length ? listGroupItems(requestsReceived, approveRequest, declineRequest) : noReqs()}
        </UL>
      </Wrapper>
    </CSSTransitionGroup>
  );
}

RequestsReceived.propTypes = {
  requestsReceived: React.PropTypes.array,
  slideFrom: React.PropTypes.string,
  approveRequest: React.PropTypes.func,
  declineRequest: React.PropTypes.func,
};

export default RequestsReceived;
