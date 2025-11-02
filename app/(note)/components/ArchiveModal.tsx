import { useApp } from "@/contexts/AppContext";
import { useNote } from "@/contexts/NoteContext"
import { toast } from "react-toastify";

const ArchiveModal = () => {
    const { activeNote, dispatch, setActiveNote } = useNote();
    const { setDisplayArchiveModal } = useApp();

    const handleArchiveNote = () => {
        const payload = {
            ...activeNote!,
            isArchived: true,
            lastEdited: new Date().toISOString()
        };

        dispatch({ type: "save", payload });

        setActiveNote(payload);

        setDisplayArchiveModal(false);

        toast("Note Archived");
    };

    // const closeModal = ()

    return (
        <div onClick={() => setDisplayArchiveModal(false)} className=" h-dvh w-dvw bg-neutral-950/50 dark:bg-neutral-950/30 z-50 fixed inset-0 flex items-center justify-center px-4">
            <div onClick={(e) => e.stopPropagation()} className="bg-neutral-0 dark:bg-neutral-700 dark:border dark:border-neutral-600 rounded-xl divide-y divide-neutral-100 dark:divide-neutral-600 max-w-[440px]">
                <div className="p-5 flex justify-start items-start gap-4">
                    <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-0 text-neutral-950 rounded-lg h-10 w-25">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-neutral-950 dark:text-neutral-0 font-semibold">Archive Note</h1>
                        <p className="text-neutral-700 dark:text-neutral-200 text-sm">Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.</p>
                    </div>
                </div>
                <div className="p-5 flex justify-end items-center gap-4">
                    <button className="text-neutral-600 dark:text-neutral-200 dark:bg-neutral-500 bg-neutral-100 rounded-lg py-3 px-4 font-medium text-sm cursor-pointer" onClick={() => setDisplayArchiveModal(false)}>Cancel</button>
                    <button className="bg-blue-500 text-neutral-100 rounded-lg font-medium text-sm py-3 px-4 cursor-pointer" onClick={handleArchiveNote}>Archive Note</button>
                </div>
            </div>
        </div>
    )
}

export default ArchiveModal