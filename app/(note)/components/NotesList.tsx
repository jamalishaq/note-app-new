'use client'

import { useApp } from "@/contexts/AppContext";
import { useNote } from "@/contexts/NoteContext";

type Note = {
    id: number | null;
    title: string;
    tags: string[];
    content: string;
    lastEdited: string;
    isArchived: boolean;
};

const NotesList = () => {
    const { notes, activeNote, setActiveNote, newNote, setNewNote, notesLength } = useNote();
    const { setActiveTab } = useApp();

    const handleClick = (note: Note) => {
        setActiveNote(note);
        setActiveTab("active-note");
        setNewNote(false);
    };

    if (notesLength === 0) return null;

    return (
        <>
            <ul className="lg:mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
                {newNote && <li key={"new-note"} className="dark:bg-neutral-800 dark:text-neutral-0 bg-neutral-100 text-neutral-950 font-semibold w-full rounded-lg p-2"><p>Untitled Note</p></li>}
                {notes.map(note => {
                    const formattedDate = new Date(note.lastEdited).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    });
                    return (
                        <li key={note.id}>
                            <button type="button" onClick={() => handleClick(note)} className={`w-full text-start cursor-pointer rounded-md lg:p-2 py-2 ${activeNote?.id === note.id ? 'lg:bg-neutral-100 lg:dark:bg-neutral-800' : ''}`}>
                                <h1 className="font-semibold text-neutral-950 dark:text-neutral-0">{note.title || "No Title"}</h1>
                                {/* tags */}
                                {note.tags.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 my-2">
                                        {note.tags.map((tag, index) => <span key={index} className="px-2 py-1 text-xs text-center rounded bg-neutral-200 dark:bg-neutral-600 dark:text-neutral-0 text-neutral-950 ">{tag}</span>)}
                                    </div>
                                ) : <h2 className="font-medium text-neutral-950">No Tags</h2>}
                                <span className="text-xs text-neutral-700 dark:text-neutral-300">{formattedDate}</span>
                            </button>
                        </li>
                    )
                })}
            </ul >
        </>
    )
}

export default NotesList;