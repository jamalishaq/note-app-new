'use client'

import ActiveNote from "./ActiveNote";
import NotesList from "./NotesList";
import CreateNoteBtn from "./CreateNoteBtn";
import Tabs from "./Tabs";
import TabSwitcher from "./TabSwitcher";
import { useApp } from "@/contexts/AppContext";
import Settings from "./Settings";
import { useNote } from "@/contexts/NoteContext";
import DeleteModal from "./DeleteModal";
import ArchiveModal from "./ArchiveModal";
import { ToastContainer, Bounce } from "react-toastify";
import { useHeader } from "@/contexts/HeaderContext";

const Main = () => {
    const { displaySettings, setSearchTerm, selectedTag, filter, searchTerm, displayDeleteModal, setDisplayDeleteModal, displayArchiveModal, setDisplayArchiveModal } = useApp();
    const { notesLength, setActiveNote, dispatch, activeNote, newNote: createNote } = useNote();
    const { setHeaderText } = useHeader();

    const newNote = {
        id: null,
        title: "",
        tags: [],
        content: "",
        lastEdited: "",
        isArchived: false
    }

    const handleCreate = () => {
        setActiveNote(newNote);
        setSearchTerm("");
        setHeaderText("All Notes")
        dispatch({ type: "filter", payload: "all" });
    };

    return (
        <main className="relative flex flex-col h-dvh">
            {/* Desktop View */}
            {displaySettings ? <Settings /> :
                (<div className="border-t border-l border-neutral-200 dark:border-neutral-800 hidden lg:grid grid-cols-[1fr_2fr_1fr] flex-grow">
                    <div className="px-8 py-5">
                        <CreateNoteBtn />

                        <p
                            className={`text-neutral-700 dark:text-neutral-300 text-sm my-4 ${selectedTag ? '' : 'hidden'
                                }`}
                        >
                            All notes with the <span className="text-neutral-950 dark:text-neutral-0">&quot;{selectedTag}&quot;</span> tag are shown here.
                        </p>

                        <p
                            className={`text-neutral-700 text-sm my-4 dark:text-neutral-300 ${filter === 'archived' && notesLength > 0 ? '' : 'hidden'
                                }`}
                        >
                            All your archived notes are stored here. You can restore or delete them anytime.
                        </p>

                        <p
                            className={`bg-neutral-100 border border-neutral-200 rounded-lg p-2 text-neutral-950 dark:text-neutral-300 text-sm my-4 ${filter === 'archived' && notesLength <= 0 ? '' : 'hidden'
                                }`}
                        >
                            No notes have been archived yet. Move notes here for safekeeping, or{' '}
                            <button className="underline underline-offset-2 cursor-pointer" onClick={handleCreate}>create a new note.</button>
                        </p>

                        <p
                            className={`bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 rounded-lg p-2 text-neutral-950 dark:text-neutral-300 text-sm my-4 ${filter === 'all' && notesLength <= 0 ? '' : 'hidden'
                                }`}
                        >
                            You don&apos;t have any notes yet. Start a new note to capture your thoughts and ideas.
                        </p>

                        <p
                            className={`bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2 text-neutral-0 dark:text-neutral-300 text-sm my-4 ${searchTerm && notesLength <= 0 ? '' : 'hidden'
                                }`}
                        >
                            No notes match your search. Try a different keyword or{' '}
                            <button className="underline underline-offset-2 cursor-pointer" onClick={handleCreate}>create a new note.</button>
                        </p>

                        <p
                            className={`text-neutral-950 dark:text-neutral-300 text-sm my-4 ${searchTerm && notesLength > 0 ? '' : 'hidden'
                                }`}
                        >
                            All notes matching <span className="text-neutral-950 dark:text-neutral-0">&quot;{searchTerm}&quot;</span> are displayed below.
                        </p>

                        <NotesList />
                    </div>
                    <ActiveNote />

                    {/* Actions */}
                    {(activeNote && !createNote) && (
                        <div className="p-8">
                            {/* Archive */}
                            <button type="button" onClick={() => setDisplayArchiveModal(true)} className="cursor-pointer flex gap-2 border border-neutral-300 dark:border-neutral-600 rounded-lg p-2 w-full text-neutral-950 dark:text-neutral-0 font-medium  lg:my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059" />
                                </svg>
                                <span className="hidden lg:block">Archive Note</span>
                            </button>
                            {/* Delete */}
                            <button onClick={() => setDisplayDeleteModal(true)} type="button" className="cursor-pointer flex gap-2 border border-neutral-300 dark:border-neutral-600 rounded-lg p-2 w-full text-neutral-950 dark:text-neutral-0 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509" />
                                </svg>
                                <span className="hidden lg:block">Delete Note</span>
                            </button>
                        </div>
                    )}
                </div>)}


            {/* Tablet and Mobile View */}
            <div className="lg:hidden flex-grow">
                <Tabs />
                <CreateNoteBtn />
                <TabSwitcher />
            </div>

            {displayDeleteModal && <DeleteModal />}
            {displayArchiveModal && <ArchiveModal />}

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </main>
    )
}

export default Main