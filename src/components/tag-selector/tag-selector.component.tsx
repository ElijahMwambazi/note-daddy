import { FC, InputHTMLAttributes } from "react";
import { MultiValue } from "react-select";
import CreatableReactSelect from "react-select/creatable";
import { ValueType } from "../input-selector-row/input-selector-row.component";
import { customSelectStyles } from "./tag-selector.styles";

export type TagSelectorOptions = {
  isMulti: boolean;
  value: ValueType[];
  options: ValueType[];
  onCreateOption: (label: string) => void;
  onChange: (tags: MultiValue<ValueType>) => void;
  id: string;
};

export type TagSelectorProps = {
  tagSelectorOptions: TagSelectorOptions;
} & InputHTMLAttributes<HTMLInputElement>;

const TagSelector: FC<TagSelectorProps> = ({
  tagSelectorOptions,
}) => {
  return (
    <CreatableReactSelect
      {...tagSelectorOptions}
      styles={customSelectStyles}
    />
  );
};

export default TagSelector;
