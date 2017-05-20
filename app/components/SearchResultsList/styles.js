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
  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

export const ListItemSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 50%;
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
  text-wrap: wrap;
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

