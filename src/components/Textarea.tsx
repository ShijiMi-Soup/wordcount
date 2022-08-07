import {
  Textarea as ChkrTextarea,
  TextareaProps as ChkrTextareProps
} from "@chakra-ui/react"
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react"
import { TextValue } from "../classes"
import { useTextValueContext } from "../providers"
import { useSettingsStateContext } from "../providers/SettingsProvider"

type TextareaProps = ChkrTextareProps & {
  textValueState: [
    string | undefined,
    Dispatch<SetStateAction<string | undefined>>
  ]
}
const Textarea = (props: TextareaProps) => {
  const settings = useSettingsStateContext()[0]
  const chkrTextAreaProps = props as ChkrTextareProps
  const [textValue, setTextValue] = useTextValueContext()
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setTextValue({ ...textValue, text: value })
    localStorage.setItem("text", value)
  }

  useEffect(() => {
    const previous = localStorage.getItem("text")
    if (previous) setTextValue(new TextValue(previous))
  }, [])

  return (
    <ChkrTextarea
      value={textValue.text}
      onChange={handleInputChange}
      placeholder="文字を入力してください"
      resize="none"
      border="none"
      focusBorderColor="none"
      fontSize={settings.fontSize}
      {...chkrTextAreaProps}
    />
  )
}
export default Textarea
