import {
  RefObject,
  createContext,
  useRef,
  useState,
  FC,
  ReactNode,
} from "react";
import { Tag } from "../App";

export type NoteFormContexProps = {
  titleRef: RefObject<any> | null;
  markdownRef: RefObject<any> | null;
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<
    React.SetStateAction<Tag[]>
  >;
};

const initialState: NoteFormContexProps = {
  titleRef: null,
  markdownRef: null,
  selectedTags: [],
  setSelectedTags: () => [],
};

export const NoteFormContext =
  createContext<NoteFormContexProps>(
    initialState
  );

export const NoteFormProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef =
    useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] =
    useState<Tag[]>([]);

  const value = {
    titleRef,
    markdownRef,
    selectedTags,
    setSelectedTags,
  };

  return (
    <NoteFormContext.Provider value={value}>
      {children}
    </NoteFormContext.Provider>
  );
};
