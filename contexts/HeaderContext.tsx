'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type HeaderContextType = {
  headerText: string;
  setHeaderText: (headerText: string) => void;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);

// Custom hook to use HeaderContext
export const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error("useHeader must be used within a NoteProvider");
    }
    return context;
};

const HeaderProvider = ({ children }: { children: ReactNode }) => {
    const [headerText, setHeaderText] = useState('');
    const contextValue = {
        headerText,
        setHeaderText
    }

    return (
        <HeaderContext.Provider value={contextValue}>
            {children}
        </HeaderContext.Provider >
    )
}

export default HeaderProvider;