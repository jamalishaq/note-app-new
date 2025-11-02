import { useNote } from "@/contexts/NoteContext"
import NotesList from "./NotesList"

const ArchivedTab = () => {
  const { notesLength } = useNote();
  return (
    <div className="px-8 pt-6">
      <h1 className="text-neutral-950 dark:text-neutral-0 font-bold text-2xl">Archived Notes</h1>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm lg:my-4">All your archived notes are stored here. You can restore or delete them anytime.</p>
      {/* {(notesLength <= 0) && <p className="bg-neutral-100 border border-neutral-200 rounded-lg p-2 text-neutral-950 text-sm my-4">No notes have been archived yet. Move notes here for safekeeping, or <button className="underline underline-offset-2">create a new note.</button></p>} */}
      <p
        className={`bg-neutral-100 border border-neutral-200 rounded-lg p-2 text-neutral-950 dark:text-neutral-0 text-sm my-4 ${notesLength <= 0 ? '' : 'hidden'
          }`}
      >
        No notes have been archived yet. Move notes here for safekeeping, or{' '}
        <button className="underline underline-offset-2">create a new note.</button>
      </p>

      <NotesList />
    </div>
  )
}

export default ArchivedTab