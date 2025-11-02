'use client'

import SettingsList from "./SettingsList";
import ColorTheme from "./ColorTheme";
import FontTheme from "./FontTheme";
import ChangePassword from "./ChangePassword";
import { useState } from "react";

const Settings = () => {
    const [ activeSetting, setActiveStting ] = useState<string>("color-theme");

    const handleClick = (activeSettings: string) => {
        setActiveStting(activeSettings);
    }

    return (
        <div className="hidden flex-grow lg:grid grid-cols-[258px_1fr] lg:border-t border-neutral-200">
            <SettingsList handleClick={handleClick} activeSetting={activeSetting} />
            {activeSetting === "color-theme" && <ColorTheme />}
            {activeSetting === "font-theme" && <FontTheme />}
            {activeSetting === "change-password" && <ChangePassword />}
        </div>
    )
}

export default Settings