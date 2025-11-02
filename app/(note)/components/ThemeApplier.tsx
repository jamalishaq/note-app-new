'use client'

import { useEffect } from 'react'

const ThemeApplier = () => {
    useEffect(() => {
        const preferredTheme = localStorage.getItem("preferredTheme");

        if (preferredTheme === "dark") {
            document.body.classList.add("dark");
        } else if (preferredTheme === "light") {
            document.body.classList.remove("dark");
        } else if (preferredTheme === "system") {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        }
    }, [])
    return null;
}

export default ThemeApplier