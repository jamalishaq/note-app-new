import { useApp } from "@/contexts/AppContext";
import { useHeader } from "@/contexts/HeaderContext";
import { useNote } from "@/contexts/NoteContext";

type Note = {
  id: number | null;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

const CreateNoteBtn = () => {
  const { setActiveNote, dispatch, setNewNote } = useNote();
  const { setActiveTab, setSearchTerm, }= useApp();
  const { setHeaderText } = useHeader();

  const newNote: Note = {
    id: null,
    title: "",
    tags: [],
    content: "",
    lastEdited: "",
    isArchived: false
  }

  const handleClick = () => {
    setActiveNote(newNote);
    setActiveTab("active-note");
    setSearchTerm("");
    dispatch({type: "filter", payload: "all"});
    setHeaderText("All Notes");
    setNewNote(true);
  };

  return (
    <button type="button" onClick={handleClick} className="fixed flex items-center justify-center bg-blue-500 rounded-full cursor-pointer lg:w-full lg:h-fit size-16 bottom-20 right-10 lg:shadow-none lg:static text-neutral-0 lg:rounded-lg lg:py-2 lg:px-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z" />
      </svg>
      <span className="hidden text-sm font-medium lg:block">Create New Note</span>
    </button>
  )
}

export default CreateNoteBtn

