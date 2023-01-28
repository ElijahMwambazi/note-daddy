import styled from "styled-components";

import {
  LargeFontSize,
  ColorGreyFour,
  ColorGreyOne,
  commonInputStyles,
} from "../../global.styles";

export const Textarea = styled.textarea`
  font-size: ${LargeFontSize};
  color: ${ColorGreyOne};
  border: 1px solid ${ColorGreyFour};
  padding: 2rem;
  border-radius: 5px;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  margin-bottom: 2rem;
  resize: none;
  outline: none;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ${commonInputStyles}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
`;
