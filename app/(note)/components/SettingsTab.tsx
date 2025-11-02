import { useApp } from "@/contexts/AppContext"
import SettingsList from "./SettingsList"

const SettingsTab = () => {
  const { setActiveTab } = useApp();

  const handleClick = (activeTab: string) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="px-8 pt-6">
      <h1 className="text-neutral-950 dark:text-neutral-0 font-bold text-2xl mb-4">Settings</h1>
      <SettingsList handleClick={handleClick} />
    </div>
  )
}

export default SettingsTab
