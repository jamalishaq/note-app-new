'use client'

import { useHeader } from "@/contexts/HeaderContext";
import Logo from "./Logo";
import TagsList from "./TagsList";
import { useApp } from "@/contexts/AppContext";
import { useNote } from "@/contexts/NoteContext";

const Aside = () => {
    const { setHeaderText } = useHeader();
    const { dispatch, notesLength } = useNote();
    const { displaySettings, setDisplaySettings, filter, setFilter, setSelectedTag, setSearchTerm, } = useApp();

    const handleClick = (text: string, filter: string) => {
        setHeaderText(text);
        setFilter(filter);
        setSelectedTag("");
        setSearchTerm("");
        dispatch({type: 'filter', payload: filter});

        if (displaySettings) {
            setDisplaySettings(false);
        }
    };

    return (
        <aside className="hidden p-4 pt-8 pr-8 row-span-full lg:block">
            <Logo />
            {/* Filters */}
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 w-[272px] pr-4">
                <div className="py-5">
                    {/* All notes */}
                    <button onClick={() => handleClick("All Notes", "all")} type="button" className={`cursor-pointer flex justify-between items-center w-full p-4 rounded-lg ${filter === 'all' ? 'bg-neutral-100 dark:bg-neutral-800 text-blue-500' : 'dark:text-neutral-200'}`}>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-neutral-950 dark:text-neutral-200">All Notes</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" className={`text-neutral-950 dark:text-neutral-200 ${filter === 'all' ? 'block' : 'hidden'}`}>
                            <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* Archived notes */}
                    <button onClick={() => handleClick("Archived Notes", "archived")} type="button" className={`cursor-pointer flex justify-between items-center w-full p-4 rounded-lg ${filter === 'archived' ? 'bg-neutral-100 dark:bg-neutral-800 text-blue-500' : 'dark:text-neutral-200'}`}>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059" />
                            </svg>
                            <span className="text-sm font-medium text-neutral-950 dark:text-neutral-200">Archived Notes</span>
                        </span>
                        {/* Icon Arrow Left */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" className={`text-neutral-950 dark:text-neutral-200 ${filter === 'archived' ? 'block' : 'hidden'}`}>
                            <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* Tag filters */}
                <div className="pt-6">
                    {notesLength > 0 && <h1 className="pl-3 text-neutral-950 dark:text-neutral-500">Tags</h1>}
                    <TagsList />
                </div>
            </div>
        </aside>
    )
}

export default Aside