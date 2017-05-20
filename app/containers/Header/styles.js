import styled from 'styled-components';


export const Wrapper = styled.div `
  width: 100%;
  display: flex;
  padding: 0em 0em 0em 1em;
  position: relative;
  box-shadow: 0px 0px 9px;
  @media screen and (max-width: 800px) {
   flex-direction: column;
   padding: 0em 0em 0em 0em;
  }
`;

export const ShowNavWrapper = styled.div `
  width: 100%;
  position: absolute;
  display: none;
  height: 48px;
  @media screen and (max-width: 800px) {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 0em 1em 0em 0em;
  }
`;
