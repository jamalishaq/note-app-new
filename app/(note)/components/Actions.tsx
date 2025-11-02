import { useApp } from "@/contexts/AppContext"

const Actions = ({ handleSave }: {handleSave: () => void}) => {
    const { setActiveTab, lastOpenedTab, setDisplayDeleteModal, setDisplayArchiveModal } = useApp();

    return (
        <div className="pb-4 mb-4 flex justify-between items-end lg:hidden">
            {/* Breadcrumb */}
            <button className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm font-medium" onClick={() => setActiveTab(lastOpenedTab)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
                </svg>
                <span>Go Back</span>
            </button>

            <div className="flex lg:gap-4 gap-2 items-center">
                {/* Archive */}
                <button type="button" onClick={() => setDisplayArchiveModal(true)} className="cursor-pointer flex gap-2 lg:border border-neutral-300 text-neutral-950 dark:text-neutral-300 font-medium  lg:my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059" />
                    </svg>
                    <span className="hidden lg:block">Archive Note</span>
                </button>
                {/* Delete */}
                <button type="button" onClick={() => setDisplayDeleteModal(true)} className="cursor-pointer flex gap-2 lg:border border-neutral-300 text-neutral-950 dark:text-neutral-300 font-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 25">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509" />
                    </svg>
                    <span className="hidden lg:block">Delete Note</span>
                </button>

                {/* Cancel */}
                <button className="text-sm text-neutral-600 dark:text-neutral-300">Cancel</button>
                {/* Save Note */}
                <button className="text-sm text-blue-500" onClick={handleSave}>Save Note</button>
            </div>
        </div>
    )
}

export default Actions