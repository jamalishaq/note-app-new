import { useApp } from "@/contexts/AppContext";
import NotesList from "./NotesList";

const SingleTag = () => {
  const { selectedTag, setActiveTab } = useApp();

  return (
    <div className="px-8 py-6">
      {/* Breadcrumb */}
      <button className="flex gap-2 items-center text-neutral-600 dark:text-neutral-0 text-sm font-medium mb-3 lg:hidden" onClick={() => setActiveTab("tags")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
        </svg>
        <span>All Tags</span>
      </button>
      <h1 className="text-neutral-950 dark:text-neutral-0 font-bold text-2xl"><span className="text-neutral-600">Notes Tagged: </span>{selectedTag}</h1>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm my-4">All notes with the <span className="text-neutral-950 dark:text-neutral-0">&quot;{selectedTag}&quot;</span> tag are shown here.</p>
      <NotesList />
    </div>
  )
}

export default SingleTag;