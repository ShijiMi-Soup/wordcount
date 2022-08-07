import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  SetStateAction,
  useState,
  useEffect
} from "react"
import { TextValue } from "../classes"

const TextValueContext = createContext<
  [TextValue, Dispatch<SetStateAction<TextValue>>]
>([new TextValue(), () => {}])
export const useTextValueContext = () => useContext(TextValueContext)

type TextValueStatesProviderProps = { children: ReactNode }
export const TextValueProvider = ({
  children
}: TextValueStatesProviderProps) => {
  const textValueState = useState<TextValue>(new TextValue())
  useEffect(() => {
    const localStorageText = localStorage.getItem("text")
    textValueState[1](new TextValue(localStorageText))
  }, [])

  return (
    <TextValueContext.Provider value={textValueState}>
      {children}
    </TextValueContext.Provider>
  )
}
export default TextValueProvider
