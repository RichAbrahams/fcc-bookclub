import styled from 'styled-components';

export const NavControl = styled.div `
  display: none;
  @media screen and (max-width: 800px) {
   display: flex;
   flex-grow: 1;
   justify-content: center;
   align-items: center;
  }
`;

export const TitleWrapper = styled.div `
  display: flex;
  @media screen and (max-width: 800px) {
    margin: 1em 0em 1em 0em;
    border-width: 0px 0px 5px 0px;
    border-color: #333;
    border-style: solid;
  }
`;

export const NavPageTitle = styled.h2 `
  border-width: 0px 0px 5px 0px;
  color: #333;
  border-color: #333;
  border-style: solid;
  width: 100%;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin: 0;
    border: none;
    width: auto;
  }
`;
