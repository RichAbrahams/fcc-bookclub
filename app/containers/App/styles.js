import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 0em 0em 2em 0em;
  display: flex;
  flex-direction: column;
  padding: 3em 1em 0em 1em;
  width: 800px;
  @media screen and (max-width: 900px) {
    min-width: 0px;
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: auto;
    border-radius: 0px;
  }
`;
