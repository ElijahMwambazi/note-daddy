import {
  Container,
  Heading,
} from "../../global.styles";
import NoteForm from "../../components/note-form/note-form.component";

const EditNote = () => {
  return (
    <Container>
      <Heading>Edit</Heading>
      <NoteForm />
    </Container>
  );
};

export default EditNote;
