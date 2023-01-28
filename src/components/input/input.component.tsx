import { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./input.styles";

export type InputOptions = {
  required?: boolean;
  type: string;
  ref: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  id: string;
};

export type InputProps = {
  inputOptions: InputOptions;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({
  inputOptions,
}) => {
  return <StyledInput {...inputOptions} />;
};

export default Input;
