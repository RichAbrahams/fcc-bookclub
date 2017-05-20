import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 3em;
  display: flex;
  justify-content: flex-end;
  padding-right: 3em;
  margin-bottom: 3em;
  box-shadow: 0px 1px 1px #999;
  display: flex;
  @media screen and (max-width: 800px) {
    padding: 0;
    justify-content: center;
  }
`;


export const LiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms;
  height: 1.1em;
  border-right: 1px solid black;
  padding: 0em 1em 0em 1em;
  font-size: 0.9em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
    margin: 0px 0px 2px 0px;
    min-height: 3em;
    width:100%;
    border: none;
    background: #225378;
    color: white;
    &:hover {
      background: #1695a3;
      cursor: pointer;
  }
`;

export const UL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
  & > div:last-child {
    border: none;
  }
`;
export const LI = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

export const H1 = styled.h1`
  font-family: 'Lobster Two', cursive;
  margin: 0px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 3em;
  transition: height 200ms, opacity 200ms;
  @media screen and (max-width: 800px) {
    padding: 0em;
    height: ${(props) => props.expandNav ? props.expandTo : '0px'};
    opacity: ${(props) => props.expandNav ? '1' : '0'};
    overflow: hidden;
    margin: ${(props) => props.expandNav ? '1em 1em 1em 1em' : '0em 1em 0em 1em'};
  }
`;
