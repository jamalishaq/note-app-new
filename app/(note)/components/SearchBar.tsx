'use client'

import { useApp } from "@/contexts/AppContext";
import { useHeader } from "@/contexts/HeaderContext";
import { useNote } from "@/contexts/NoteContext";
import { useEffect, useState } from "react"

const SearchBar = () => {
  const { setHeaderText } = useHeader();
  const { dispatch } = useNote();
  const { displaySettings, setDisplaySettings, setSearchTerm, searchTerm, setFilter, setSelectedTag } = useApp();
  const [isDesktop, setIsDesktop] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setSearchTerm(inputValue);
    setFilter(inputValue ? "" : "all");
    setSelectedTag("");

    dispatch({ type: "search", payload: inputValue});

    if (isDesktop) {
      setHeaderText(inputValue ? `<span class="text-neutral-600">Showing results for:</span> ${inputValue}` : "");
    }

    if (displaySettings) {
      setDisplaySettings(false);
    }
  };

  useEffect(() => {
    const checkIsDesktop = () => window.innerWidth >= 1024;
    setIsDesktop(checkIsDesktop());
  }, [isDesktop])

  return (
    <label htmlFor="search" className="px-4 py-3 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-950 bg-neutral-50 lg:bg-neutral-0 lg:shadow-md w-full rounded-lg flex gap-3 min-w-xs">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="flex-shrink-0 text-neutral-950 dark:text-neutral-500 ">
        <path fill="currentColor" fillRule="evenodd" d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z" clipRule="evenodd" />
      </svg>
      <input onChange={handleSearch} type="text" id="search" value={searchTerm} placeholder="Search by tittes, contents, or tags.." className="outline-none flex-grow placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-neutral-950 dark:text-neutral-0 text-sm" />
      <span className="sr-only">Search Bar</span>
    </label>
  )
}

export default SearchBar