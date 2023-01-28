import { FormEvent, useContext } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { NoteFormContext } from "../../context/note.context";
import { NoteData } from "../../App";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../button/button.component";
import {
  Form,
  Title,
  Group,
} from "../../global.styles";
import {
  Textarea,
  ButtonContainer,
} from "./note-form.styles";
import InputSelctorRow from "../input-selector-row/input-selector-row.component";

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({
  onSubmit,
}: NoteFormProps) => {
  const navigate = useNavigate();

  const { titleRef, markdownRef, selectedTags } =
    useContext(NoteFormContext);

  const onSubmitHandler = (
    e: FormEvent
  ): void => {
    e.preventDefault();

    onSubmit({
      title: titleRef!.current.value,
      markdown: markdownRef!.current.value,
      tags: selectedTags,
    });

    navigate("..");
  };

  // TODO: Focus CreateReactSelect element when title is clicked
  return (
    <Form onSubmit={onSubmitHandler}>
      {/* <InputSelctorRow /> */}
      <Group>
        <Title htmlFor="markdown">Body</Title>
        <Textarea
          required
          autoFocus
          rows={20}
          ref={markdownRef}
          id="markdown"
        />
      </Group>
      <ButtonContainer>
        <Button type="submit">Save</Button>
        <Link to="..">
          <Button
            buttonType={
              BUTTON_TYPE_CLASSES.secondary
            }
          >
            Cancel
          </Button>
        </Link>
      </ButtonContainer>
    </Form>
  );
};

export default NoteForm;
