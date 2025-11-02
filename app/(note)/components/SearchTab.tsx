import { useApp } from "@/contexts/AppContext";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import { useNote } from "@/contexts/NoteContext";

const SearchTab = () => {
  const { searchTerm, setActiveTab, setSearchTerm } = useApp();
  const { notesLength, lastNoteId, setActiveNote } = useNote();

  const newNote = {
    id: lastNoteId + 1,
    title: "",
    tags: [],
    content: "",
    lastEdited: "",
    isArchived: false
  }

  const handleCreate = () => {
    setActiveNote(newNote);
    setActiveTab("active-note");
    setSearchTerm("");
  };

  return (
    <div className="px-8 pt-6">
      <h1 className="text-neutral-950 dark:text-neutral-0 font-bold text-2xl mb-4">Search</h1>
      <SearchBar />
      {/* {searchTerm && <p className="text-neutral-700 text-sm my-4">All notes matching &quot;<span className="text-neutral-950">{searchTerm}</span>&quot; are displayed below.</p>}
      {(searchTerm && notesLength <= 0) && <p className="bg-neutral-100 border border-neutral-200 rounded-lg p-2 text-neutral-950 text-sm my-4">No notes match your search. Try a different keyword or <button className="underline underline-offset-2">create a new note.</button></p>} */}
      <p
        className={`text-neutral-950 dark:text-neutral-300 text-sm my-4 ${searchTerm && notesLength > 0 ? '' : 'hidden'
          }`}
      >
        All notes matching &quot;
        <span className="text-neutral-950 dark:text-neutral-0">{searchTerm}</span>
        &quot; are displayed below.
      </p>

      <p
        className={`bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2 text-neutral-950 dark:text-neutral-0 text-sm my-4 ${searchTerm && notesLength <= 0 ? '' : 'hidden'
          }`}
      >
        No notes match your search. Try a different keyword or{' '}
        <button className="underline underline-offset-2 cursor-pointer" onClick={handleCreate}>create a new note.</button>
      </p>

      {(searchTerm && notesLength > 0) && <NotesList />}
    </div>
  )
}

export default SearchTab