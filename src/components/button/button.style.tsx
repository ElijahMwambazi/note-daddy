import styled from "styled-components";
import {
  ColorPrimary,
  ColorPrimaryDark,
  ColorWhite,
  ColorGreyThree,
  ColorGreyFive,
} from "../../global.styles";

export const BaseButton = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${ColorWhite};
  background-color: ${ColorPrimary};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${ColorPrimaryDark};
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${ColorWhite};
  color: ${ColorGreyThree};
  border: 1px solid ${ColorGreyThree};

  &:hover {
    background-color: ${ColorGreyFive};
  }
`;
