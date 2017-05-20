import styled from 'styled-components';
import { Link } from 'react-router';

export const PageTitle = styled.h2`
  border-width: 0px 0px 5px 0px;
  border-color: #333;
  border-style: solid;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 0em 0em 0em;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  margin-top: 0;
  & > div:first-child {
    margin: 1em 0em 0em 0em;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0em 0em 0em;
`;

export const CardTitle = styled.div`
  display: flex;
  background: #1695A3;
  margin: 0em 0em 0.5em 0em;
`;

export const SubWrapper = styled.div`
  display: flex;
  & > div:first-child {
    margin: 0em 0.5em 0em 0em;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    & > div:first-child {
      margin: 0.5em 0em 0em 0em;
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  width: 50%
  background: rgb(228, 226, 226);
  padding: 3em 1em 1em 3em;
  border: 9px solid;
  border-color: rgb(210, 210, 210);
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 2em;
    justify-content: center;
  }
`;

export const FormTitle = styled.h3`
  display: flex;
  background: #1695A3;
  margin: 0em 0em 0.5em 0em;
`;

export const FormWrapper = styled.div`
  margin: 1em 0em 2em 0em;
`;

export const FormSubWrapper = styled.div`
  display: flex;
  width: 100%
  background: rgb(228, 226, 226);
  padding: 2em 3em 2em 3em;
  border: 9px solid;
  border-color: rgb(210, 210, 210);
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 2em;
    justify-content: center;
  }
`;

export const CenteredSubWrapper = styled.div`
  display: flex;
  width: 100%
  background: rgb(228, 226, 226);
  padding: 2em 3em 2em 3em;
  border: 9px solid;
  border-color: rgb(210, 210, 210);
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 2em;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 50%;
  background: rgb(228, 226, 226);
  border: 9px solid;
  border-color: rgb(210, 210, 210);
  padding: 1em;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100%
  }
`;

export const Img = styled.img`
  align-self: center;
  min-height: 185px;
`;

export const Title = styled.h3`
  display: flex;
  color: white;
  margin: 0.5em;
`;

export const TitleNoneFound = styled.h3`
  display: flex;
  justify-content: center;
  color: #333;
  margin: 0.5em;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  & > button {
    margin-left: 0.5em;
  }
  & > button:first-child {
    margin-left: 0em;
  }
`;

export const Button = styled.button`
  margin: 1em 0em 0em 0em;
  padding: 0.5em;
  background: #EB7F00;
  color: white;
  border-radius: 3px;
  width: ${(props) => props.width};
  &:hover {
    background: rgb(88, 185, 6);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  display: none;
  margin: 0;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: flex;
    color: #333;
  }
`;

export const TextInput = styled.input`
  height: 2em;
  width: 100%;
  padding: 0.5em;
  margin: 0em 0em 1em 0em;
  color: #333;
  background: white;
`;

export const Form = styled.form`
  width: 100%;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 0em 0em 0.5em 0em;
`;

export const ErrorMsg = styled.span`
  margin: -0.5em 0em 0.5em 0em;
  color: orange;
  font-weight: bold;
`;

export const RightWrapper = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1em 0em 0em 0em
`;

export const LinkStyled = styled(Link)`
  color: #1695A3;
  text-align:center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledH2 = styled.h2`
  color: #1695A3;
  text-align: center;
  }
`;

// new

export const NavControl = styled.div `
  display: none;
  & :first-child {
    display: none;
  }
  @media screen and (max-width: 800px) {
   display: flex;
   flex-grow: 1;
   justify-content: center;
   align-items: center;
   & :first-child {
    display: initial;
    }
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
