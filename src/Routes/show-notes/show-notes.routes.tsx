import {
  Container,
  Heading,
} from "../../global.styles";
import NoteForm from "../../components/note-form/note-form.component";

const ShowNotes = () => {
  return (
    <Container>
      <Heading>Notes</Heading>
      <NoteForm />
    </Container>
  );
};

export default ShowNotes;
