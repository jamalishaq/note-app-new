import { useApp } from "@/contexts/AppContext"
import ArchivedTab from "./ArchivedTab"
import HomeTab from "./HomeTab"
import SearchTab from "./SearchTab"
import SettingsTab from "./SettingsTab"
import TagsTab from "./TagsTab"
import ColorTheme from "./ColorTheme"
import FontTheme from "./FontTheme"
import ChangePassword from "./ChangePassword"
import SingleTag from "./SingleTag"
import ActiveNote from "./ActiveNote"

const Tabs = () => {
    const { activeTab } = useApp();
    switch (activeTab) {
        case 'home':
            return <HomeTab />
        case 'settings':
            return <SettingsTab />
        case 'search':
            return <SearchTab />
        case 'tags':
            return <TagsTab />
        case 'archived':
            return <ArchivedTab />
        case 'color-theme':
            return <ColorTheme />
        case 'font-theme':
            return <FontTheme />
        case 'change-password':
            return <ChangePassword />
        case 'single-tag':
            return <SingleTag />
        case 'active-note':
            return <ActiveNote />
        default:
            return <HomeTab />
    }
}

export default Tabs