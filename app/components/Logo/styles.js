import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const H1 = styled.h1`
  font-family: 'Lobster Two', cursive;
  margin: 0px;
  &:hover {
    cursor: pointer;
  }
`;

