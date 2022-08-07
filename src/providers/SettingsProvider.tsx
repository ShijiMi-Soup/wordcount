import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  SetStateAction,
  useState,
  useEffect
} from "react"
import { Settings } from "../classes"

const SettingsStateContext = createContext<
  [Settings, Dispatch<SetStateAction<Settings>>]
>([{ type: "Settings", fontSize: 20 }, () => {}])
export const useSettingsStateContext = () => useContext(SettingsStateContext)

type SettingsStateProviderProps = { children: ReactNode }
export const SettingsProvider = ({ children }: SettingsStateProviderProps) => {
  const settingsState = useState<Settings>({ type: "Settings", fontSize: 20 })
  useEffect(() => {
    const localSettings = JSON.parse(localStorage.getItem("settings"))
    if (localSettings && localSettings.type == "Settings")
      settingsState[1](localSettings)
  }, [])
  return (
    <SettingsStateContext.Provider value={settingsState}>
      {children}
    </SettingsStateContext.Provider>
  )
}
export default SettingsProvider
