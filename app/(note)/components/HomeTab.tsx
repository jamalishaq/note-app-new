import { useNote } from "@/contexts/NoteContext"
import NotesList from "./NotesList"

const HomeTab = () => {
  const { notesLength } = useNote();
  return (
    <>
      <div className="px-8 pt-6 pb-20">
        <h1 className="text-neutral-950 dark:text-neutral-0 font-bold text-2xl">All Notes</h1>
        {notesLength <= 0
          ? <p className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 rounded-lg p-2 text-neutral-950 dark:text-neutral-0 text-sm my-4">You don&apos;t have any notes yet. Start a new note to capture your thoughts and ideas.</p>
          : <NotesList />}
      </div>
    </>
  )
}

export default HomeTab