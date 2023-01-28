import { RefObject, useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import { MultiValue } from "react-select";
import { NoteFormContext } from "../../context/note.context";
import { Tag } from "../../App";
import Input from "../input/input.component";
import TagSelector from "../tag-selector/tag-selector.component";
import {
  Group,
  Title,
} from "../../global.styles";
import { Row } from "./input-selector-row.styles";
import { FC } from "react";

export type ValueType = {
  value: string;
  label: string;
};

export type InputSelectorRowProps = {
  onAddTag: (newTag: Tag) => void;
  availableTags: Tag[];
};

const InputSelctorRow: FC<
  InputSelectorRowProps
> = ({ onAddTag, availableTags }) => {
  const {
    titleRef,
    selectedTags,
    setSelectedTags,
  } = useContext(NoteFormContext);

  const value = selectedTags.map((tag) => {
    return {
      value: tag.id,
      label: tag.label,
    };
  });

  const onCreateOptionsHandler = (
    label: string
  ) => {
    const newTag = {
      id: uuidV4(),
      label,
    };

    onAddTag(newTag);

    setSelectedTags((prev) => [...prev, newTag]);
  };

  const options = availableTags.map((tag) => {
    return {
      label: tag.label,
      value: tag.id,
    };
  });

  const onChangeHandler = (
    tags: MultiValue<ValueType>
  ) => {
    setSelectedTags(
      tags.map((tag) => {
        return {
          id: tag.value,
          label: tag.label,
        };
      })
    );
  };

  return (
    <Row>
      <Group>
        <Title htmlFor="title">Title</Title>
        <Input
          inputOptions={{
            required: true,
            type: "text",
            ref: titleRef as RefObject<HTMLInputElement>,
            placeholder: "Add title",
            id: "title",
          }}
        />
      </Group>
      <Group>
        <Title htmlFor="tags">Tags</Title>
        <TagSelector
          tagSelectorOptions={{
            isMulti: true,
            onCreateOption:
              onCreateOptionsHandler,
            value: value,
            options: options,
            onChange: onChangeHandler,
            id: "tags",
          }}
        />
      </Group>
    </Row>
  );
};

export default InputSelctorRow;
