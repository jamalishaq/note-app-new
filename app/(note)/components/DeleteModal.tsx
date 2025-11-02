import { useApp } from "@/contexts/AppContext"
import { useNote } from "@/contexts/NoteContext";
import { toast } from "react-toastify";

const DeleteModal = () => {
    const { activeNote, dispatch, setActiveNote} = useNote();
    const { setDisplayDeleteModal, setActiveTab, lastOpenedTab } = useApp();
    const handleDeleteNote = () => {
        const payload = { id: activeNote!.id};

        dispatch({ type: "delete", payload});
        setActiveNote(null);
        if (lastOpenedTab === "archived") {
            dispatch({ type: "filter", payload: "archived"});
        }
        setActiveTab(lastOpenedTab);

        setDisplayDeleteModal(false);

        toast("Note Deleted");

    }
    return (
        <div onClick={() => setDisplayDeleteModal(false)} className=" h-dvh w-dvw bg-neutral-950/50 dark:bg-neutral-950/30 z-50 fixed inset-0 flex items-center justify-center px-4">
            <div onClick={(e) => e.stopPropagation()} className="bg-neutral-0 dark:bg-neutral-700 dark:border dark:border-neutral-600 rounded-xl divide-y divide-neutral-100 dark:divide-neutral600 max-w-[440px]">
                <div className="p-5 flex justify-start items-start gap-4">
                    <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-0 text-neutral-950 rounded-lg h-10 w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-neutral-950 dark:text-neutral-0 font-semibold">Delete Note</h1>
                        <p className="text-neutral-700 dark:text-neutral-200 text-sm">Are you sure you want to permanently delete this note? This action cannot be undone.</p>
                    </div>
                </div>
                <div className="p-5 flex justify-end items-center gap-4">
                    <button className="text-neutral-600 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-500 rounded-lg py-3 px-4 font-medium text-sm cursor-pointer" onClick={() => setDisplayDeleteModal(false)}>Cancel</button>
                    <button className="bg-red-500 text-neutral-100 rounded-lg font-medium text-sm py-3 px-4 cursor-pointer" onClick={handleDeleteNote}>Delete Note</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;