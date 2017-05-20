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
  @media screen and (max-width: 750px) {
    padding: 0;
    justify-content: center;
  }
`;

export const UL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LiOnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #666;
  padding: 0.5em;
  width: 50%;
  border-radius: 5px 5px 0px 0px;
  &:hover {
    cursor: pointer;
  }
`;

export const LiOffWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  padding: 0.5em;
  width: 50%;
  border-radius: 5px 5px 0px 0px;
  background: lightgrey;
  &:hover {
    cursor: pointer;
  }
`;

export const LI = styled.li`
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
  width: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

