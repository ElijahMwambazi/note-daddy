import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  SecondaryButton,
} from "./button.style";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  secondary = "secondary",
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.secondary]:
      SecondaryButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
