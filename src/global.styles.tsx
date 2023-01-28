import styled, {
  createGlobalStyle,
  css,
} from "styled-components";

// COLORS
export const ColorPrimary = "#55c57a";
export const ColorPrimaryLight = "#7ed56f";
export const ColorPrimaryDark = "#28b485";

export const ColorWhite = "#fff";
export const ColorBlack = "#000";

export const ColorGreyOne = "#777";
export const ColorGreyTwo = "#333";
export const ColorGreyThree = "#999999a1";
export const ColorGreyFour = "#99999990";
export const ColorGreyFive = "#9999991e";

// FONT
export const DefaultFontSize = "1.6rem";
export const LargeFontSize = "1.7rem";

// GLOBAL STYLES
export const commonInputStyles = css`
  transition: all 0.1s ease-in-out;

  &:active,
  &:focus {
    color: ${ColorBlack};
    border: 1px solid ${ColorWhite};
    box-shadow: 0px 0px 0px 2px ${ColorPrimary};
  }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  ::selection {
    color: ${ColorWhite};
    background-color: ${ColorPrimary};
  }

  .App {
    font-size: ${DefaultFontSize};
    color: ${ColorGreyTwo};
    display: grid;
    grid-template-columns: 1fr 8fr;
    height: 100vh;
    max-width: 102rem;
    margin: 0 auto;
    border-left: 1px solid ${ColorGreyOne};
    border-right: 1px solid ${ColorGreyOne};
  }

  a {
    text-decoration: none;
  }

  
`;

// CONTAINER
export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  /* overflow-y: scroll; */
`;

// HEADINGS
export const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
`;

//
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

//
export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

//
export const Title = styled.label`
  margin-bottom: 0.2rem;
`;
