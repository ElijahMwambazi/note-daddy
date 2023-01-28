import styled from "styled-components";
import {
  ColorGreyOne,
  ColorGreyFour,
  commonInputStyles,
} from "../../global.styles";

export const StyledInput = styled.input`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${ColorGreyOne};
  text-transform: capitalize;
  height: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid ${ColorGreyFour};
  border-radius: 5px;
  outline: none;

  ${commonInputStyles}
`;
