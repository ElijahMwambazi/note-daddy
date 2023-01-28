// import styled from "styled-components";
import {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
} from "react-select";
import { ValueType } from "../input-selector-row/input-selector-row.component";
import {
  ColorPrimary,
  ColorWhite,
  ColorGreyFour,
} from "../../global.styles";

export const customSelectStyles = {
  control: (
    base: CSSObjectWithLabel,
    state: ControlProps<
      ValueType,
      true,
      GroupBase<ValueType>
    >
  ) => ({
    ...base,
    fontFamily: "Roboto",
    transition: "all 0.1s ease-in-out",
    border: state.isFocused
      ? `1px solid ${ColorWhite}`
      : `1px solid ${ColorGreyFour}`,
    boxShadow: state.isFocused
      ? `0px 0px 0px 2px ${ColorPrimary}`
      : "none",
    "&:hover": {
      boxShadow: state.isFocused
        ? `0px 0px 0px 2px ${ColorPrimary}`
        : "none",
    },
  }),
  valueContainer: (
    styles: CSSObjectWithLabel
  ) => {
    return {
      ...styles,
      width: "10rem",
      marginTop: "0.4rem",
      flexWrap: "nowrap",
      overflowX: "scroll",
      "::-webkit-scrollbar": {
        height: "0.4rem",
      },
      "::-webkit-scrollbar-track": {
        borderRadius: "10px",
        background: `${ColorWhite}`,
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        background: `${ColorGreyFour}`,
        transition: "all 0.2s",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: `${ColorPrimary}`,
      },
    };
  },
  multiValue: (styles: CSSObjectWithLabel) => {
    return {
      ...styles,
      flexShrink: "0",
      backgroundColor: `${ColorPrimary}`,
    };
  },
  multiValueLabel: (
    styles: CSSObjectWithLabel
  ) => {
    return {
      ...styles,
      textTransform: "capitalize",
      color: `${ColorWhite}`,
    };
  },
};
