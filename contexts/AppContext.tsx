'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
    displaySettings: boolean;
    setDisplaySettings: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (activeTab: string) => void
    selectedTag: string;
    setSelectedTag: (activeTag: string) => void
    filter: string;
    setFilter: (filterValue: string) => void
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void
    lastOpenedTab: string;
    setLastOpenedTab: (searchTerm: string) => void
    displayDeleteModal: boolean;
    setDisplayDeleteModal: (value: boolean) => void
    displayArchiveModal: boolean;
    setDisplayArchiveModal: (value: boolean) => void
};

export const AppContext = createContext<AppContextType | null>(null);

// Custom hook to use AppContext
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp must be used within a NoteProvider");
    }
    return context;
};

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [displaySettings, setDisplaySettings] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("home");
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [filter, setFilter] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [lastOpenedTab, setLastOpenedTab] = useState<string>("");
    const [displayDeleteModal, setDisplayDeleteModal] = useState<boolean>(false);
    const [displayArchiveModal, setDisplayArchiveModal] = useState<boolean>(false);

    const contextValue = {
        displaySettings,
        setDisplaySettings,
        activeTab,
        setActiveTab,
        selectedTag,
        setSelectedTag,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        lastOpenedTab,
        setLastOpenedTab,
        displayDeleteModal,
        setDisplayDeleteModal,
        displayArchiveModal,
        setDisplayArchiveModal,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider;