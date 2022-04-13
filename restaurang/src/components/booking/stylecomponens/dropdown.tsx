import styled from 'styled-components'

export const DropDownContainer = styled("div")`
  width: 40px;
`;

export const DropDownHeader = styled("div")`
  padding: 3px 0px 3px 0px;
  padding-left: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  color: #000;
  background: #FFB2B2;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 2px;
  position: absolute;
  margin: 0;
  background: #FFDADA;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  font-size: 1rem;
  text-align: center;
  display: flex;
  width:600px;
  justify-content: space-evenly;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  padding: 2px 5px 2px 5px;
  border: 1px solid black;
  margin-bottom: 0.8em;
`;
