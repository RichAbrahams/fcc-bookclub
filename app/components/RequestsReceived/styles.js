import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1em;
`;

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  margin: 0em 0em 2em 0em;
  border-bottom: 1px solid #666;
  padding: 1em;
  border-radius: 3px;
`;

export const ListItemSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 33%;
  padding: 0em 0em 1em 0em;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const H3 = styled.h3`
  word-wrap: normal;
  margin: 0em 0em 1em 0em;
`;

export const H2 = styled.h3`
  word-wrap: normal;
  margin: 3em 0em 3em 0em ;
`;

export const P = styled.p`
  word-wrap: normal;
  margin: 0em 0em 1em 0em ;
`;

export const Img = styled.img`
  align-self: center;
  min-height: 185px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ApproveButton = styled.button`
  padding: 0.5em;
  color: white;
  background: #333;
  margin: 1em 1em 0em 0em;
  &:hover {
    background: #888;
    cursor: pointer;
  }
`;

export const DeclineButton = styled.button`
`;
