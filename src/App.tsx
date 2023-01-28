import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.routes";
import Home from "./Routes/home/home.routes";
import CreateNote from "./Routes/create-note/create-note.routes";
import ShowNotes from "./Routes/show-notes/show-notes.routes";
import EditNote from "./Routes/edit-note/edit-note.routes";
import { useLocalStorage } from "./useLocalStorage";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  tagIds: string[];
  markdown: string;
};

export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

export type Tag = {
  id: string;
  label: string;
};

const App = () => {
  const [notes, setNotes] = useLocalStorage<
    RawNote[]
  >("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>(
    "TAGS",
    []
  );

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) =>
          note.tagIds.includes(tag.id)
        ),
      };
    });
  }, [notes, tags]);

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const onCreateNote = ({
    tags,
    ...data
  }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          ...data,
          id: uuidV4(),
          tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="create-note"
            element={
              <CreateNote
                onSubmit={onCreateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
          <Route path="/:id">
            <Route
              index
              element={<ShowNotes />}
            />
            <Route
              path="edit-note"
              element={<EditNote />}
            />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
