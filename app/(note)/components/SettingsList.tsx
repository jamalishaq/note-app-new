const SettingsList = ({ handleClick, activeSetting }: {activeSetting?: string, handleClick: (activeSetting: string) => void }) => {

  return (
    <div className="lg:border-r lg:py-5 lg:pl-8 lg:pr-4 divide-y divide-neutral-200 dark:divide-neutral-800 border-neutral-200">
      <div className="pb-4 mb-4">
        {/* Color Theme */}
        <button onClick={() => handleClick("color-theme")} className={`flex justify-between items-center w-full text-neutral-700 dark:text-neutral-0 rounded-md lg:px-2 py-2 cursor-pointer ${activeSetting === 'color-theme' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={activeSetting === 'color-theme' ? "text-blue-500" : ""}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Color Theme</span>
          </span>
          {/* Arrow left */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" className={`${activeSetting === 'color-theme' ? 'block' : 'hidden'}`}>
            <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
          </svg>
        </button>
        {/* Font Theme */}
        <button onClick={() => handleClick("font-theme")} className={`flex justify-between items-center w-full text-neutral-700 dark:text-neutral-0 rounded-md lg:px-2 py-2 cursor-pointer ${activeSetting === 'font-theme' ? 'bg-neutral-100 dark:bg-neutral-800' : ''} my-4`}>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={activeSetting === 'font-theme' ? "text-blue-500" : ""} >
              <path fill="currentColor" fillRule="evenodd" d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Font Theme</span>
          </span>
          {/* Arrow left */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" className={`${activeSetting === 'font-theme' ? 'block' : 'hidden'}`}>
            <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
          </svg>
        </button>
        {/* Change Password */}
        <button onClick={() => handleClick("change-password")} className={`flex justify-between items-center w-full text-neutral-700 dark:text-neutral-0 rounded-md lg:px-2 py-2 cursor-pointer ${activeSetting === 'change-password' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={activeSetting === 'change-password' ? "text-blue-500" : ""} >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z" clipRule="evenodd" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.862 14.203v2.22" />
            </svg>
            <span className="text-sm font-medium">Change Password</span>
          </span>
          {/* Arrow left */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" className={`${activeSetting === 'change-password' ? 'block' : 'hidden'}`}>
            <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <button className="flex items-center gap-2 cursor-pointer text-neutral-700 dark:text-neutral-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014" />
        </svg>
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  )
}

export default SettingsList