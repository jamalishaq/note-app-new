'use client'

import { useApp } from "@/contexts/AppContext";
import { ChangeEvent, useState } from "react";

const ColorTheme = () => {
  const [preferredTheme, setPreferredTheme] = useState("");
  const { setActiveTab } = useApp();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreferredTheme(e.target.value);
  };

const handleSave = () => {
  if (preferredTheme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("preferredTheme", "dark");
  } else if (preferredTheme === "light") {
    document.body.classList.remove("dark");
    localStorage.setItem("preferredTheme", "light");
  } else if (preferredTheme === "system") {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("preferredTheme", "system");
  }
};


  return (
    <div className="px-8 py-6 w-full lg:max-w-lg h-fit">
      {/* Breadcrumb */}
      <button className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3 lg:hidden" onClick={() => setActiveTab("settings")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
        </svg>
        <span>Settings</span>
      </button>

      <h1 className="text-neutral-950 dark:text-neutral-0 font-semibold">Color Theme</h1>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm">Choose your color theme:</p>
      <div className="mt-8">
        {/* Light Mode */}
        <label htmlFor="light" className={`cursor-pointer flex justify-between items-center p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 ${preferredTheme === 'light' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
          <span className="flex gap-4">
            {/* Icon Sun */}
            <span className="bg-neutral-0 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-0 size-10 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              <h2 className="text-neutral-950 dark:text-neutral-0 font-medium text-sm">Light Mode</h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs">Pick a clean and classic light theme</p>
            </span>
          </span>
          {/* Custom radio */}
          <span className={`size-4 rounded-full ${preferredTheme === 'light' ? 'border-4 border-blue-500' : 'border border-neutral-200 '}`}></span>
          <input
            type="radio"
            name="theme"
            id="light"
            value="light"
            checked={preferredTheme === 'light'}
            onChange={handleChange} className="sr-only"
          />
        </label>
        {/* Dark Mode */}
        <label htmlFor="dark" className={`cursor-pointer flex justify-between items-center p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 my-4 ${preferredTheme === 'dark' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
          <span className="flex gap-4">
            {/* Icon Moon */}
            <span className="bg-neutral-0 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-0 size-10 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.614 21.723c-2.53 0-5.03-.97-6.89-2.84-1.86-1.87-2.85-4.28-2.85-6.88 0-2.6 1.01-5.04 2.85-6.88 3.05-3.06 7.82-3.73 11.59-1.63.26.15.44.48.41.78-.03.33-.25.6-.57.7-3.05.94-5.19 3.83-5.19 7.03 0 3.21 2.14 6.1 5.19 7.02.29.09.53.38.57.68.04.3-.14.65-.4.8-1.47.82-3.1 1.22-4.71 1.22Zm0-17.94c-2.14 0-4.25.83-5.83 2.4-1.58 1.57-2.41 3.62-2.41 5.82s.85 4.27 2.41 5.82c2.21 2.21 5.49 2.94 8.39 1.99-2.83-1.51-4.7-4.52-4.7-7.81s1.87-6.3 4.69-7.82c-.83-.27-1.7-.4-2.55-.4Zm3.97 1.02s.01 0 .02.01c0 0-.01 0-.02-.01ZM18.974 19.052c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06 8.179 8.179 0 0 0 2.41-5.81c0-2.19-.85-4.26-2.41-5.81a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a9.653 9.653 0 0 1 2.85 6.87c0 2.59-1.01 5.04-2.85 6.87-.15.15-.34.22-.53.22Z" />
              </svg>
            </span>
            <span>
              <h2 className="text-neutral-950 dark:text-neutral-0 font-medium text-sm">Dark Mode</h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs">Select a sleek and modern dark theme</p>
            </span>
          </span>
          {/* Custom radio */}
          <span className={`size-4 rounded-full ${preferredTheme === 'dark' ? 'border-4 border-blue-500' : 'border border-neutral-200 '}`}></span>
          <input
            type="radio"
            name="theme"
            id="dark"
            value="dark"
            checked={preferredTheme === 'dark'}
            onChange={handleChange} className="sr-only"
          />
        </label>
        {/* System */}
        <label htmlFor="system" className={`cursor-pointer flex justify-between items-center p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 ${preferredTheme === 'system' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
          <span className="flex gap-4">
            {/* Icon System Theme */}
            <span className="bg-neutral-0 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-0 size-10 rounded-xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5.47 19.825c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.12-14.12c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L6 19.605c-.15.15-.34.22-.53.22ZM3.61 15.325a.752.752 0 0 1-.3-1.44c.38-.16.84 0 1.01.38.17.38.01.81-.37.98l-.04.02c-.1.04-.2.06-.3.06Zm.05-6.68a.766.766 0 0 1-.7-1.05c.16-.38.59-.56.97-.4h.03c.38.17.56.61.4.99-.12.29-.4.46-.69.46h-.01Zm4.69-4.7c-.29 0-.57-.17-.69-.45-.16-.38 0-.84.38-1 .38-.17.82 0 .98.38v.03a.739.739 0 0 1-.68 1.05l.01-.01Zm6.64-.03c-.09 0-.18-.02-.27-.05-.38-.16-.57-.57-.41-.95l.02-.06c.16-.38.6-.56.98-.4.38.16.56.6.4.98-.12.29-.42.48-.72.48ZM16.99 21.604h-.05c-2.42-.22-4.42-2.03-4.87-4.4a.75.75 0 0 1 .6-.88c.4-.07.8.19.88.6a3.95 3.95 0 0 0 2.03 2.74c-.44-1.42-.24-3.02.63-4.31a4.992 4.992 0 0 1 3.78-2.16c-.89-.76-2.1-1.11-3.3-.88-.4.07-.8-.19-.88-.6a.75.75 0 0 1 .6-.88c2.37-.45 4.79.74 5.88 2.9.14.27.09.63-.11.86-.2.23-.55.33-.84.23-1.43-.44-3.03.12-3.89 1.38-.86 1.26-.79 2.96.16 4.13.19.23.22.59.08.86-.13.25-.42.41-.69.41h-.01ZM7.99 13.784c-.19 0-.38-.07-.53-.22a4.762 4.762 0 0 1 0-6.72 4.762 4.762 0 0 1 6.72 0c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a3.253 3.253 0 0 0-4.6 4.6c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" />
              </svg>
            </span>
            <span>
              <h2 className="text-neutral-950 dark:text-neutral-0 font-medium text-sm">System</h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs">Adapts to your device&apos;s theme</p>
            </span>
          </span>
          {/* Custom radio */}
          <span className={`size-4 rounded-full ${preferredTheme === 'system' ? 'border-4 border-blue-500' : 'border border-neutral-200 '}`}></span>
          <input
            type="radio"
            name="theme"
            id="system"
            value="system"
            checked={preferredTheme === 'system'}
            onChange={handleChange} className="sr-only"
          />
        </label>
      </div>
      <div className="text-right mt-6">
        <button type="button" onClick={handleSave} className="cursor-pointer bg-blue-500 rounded-lg px-4 py-3 text-white text-sm font-medium">Apply Changes</button>
      </div>
    </div>
  )
}

export default ColorTheme