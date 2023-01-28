import NoteList from "../../components/note-list/note-list.component";
import {
  Container,
  Heading,
} from "../../global.styles";

const Home = () => {
  return (
    <Container>
      <Heading>Home</Heading>
      <NoteList />
    </Container>
  );
};

export default Home;
