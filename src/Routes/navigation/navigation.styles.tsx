import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  DefaultFontSize,
  ColorPrimary,
  ColorGreyTwo,
  ColorGreyOne,
} from "../../global.styles";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-right: 1px solid ${ColorGreyOne};
`;

export const Link = styled(NavLink)`
  font-size: ${DefaultFontSize};
  font-weight: bold;
  color: ${ColorGreyTwo};
  padding: 0.5rem;

  &.active {
    color: ${ColorPrimary};
  }
`;
