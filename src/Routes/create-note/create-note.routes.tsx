import NoteForm from "../../components/note-form/note-form.component";
import { NoteData, Tag } from "../../App";
import {
  Container,
  Heading,
} from "../../global.styles";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (newTag: Tag) => void;
  availableTags: Tag[];
};

const CreateNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) => {
  return (
    <Container>
      <Heading>Create</Heading>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default CreateNote;
