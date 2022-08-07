import { Box, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useTextValueContext } from "../providers"

const Counter = () => {
  const [textValue, setTextValue] = useTextValueContext()
  const [textCount, setTextCount] = useState<number>(0)
  const [halfSpaceCount, setHalfSpaceCount] = useState<number>(0)
  const [fullSpaceCount, setFullSpaceCount] = useState<number>(0)
  const [newLineCount, setNewLineCount] = useState<number>(0)
  const [paperCount, setPaperCount] = useState<number>(0)
  useEffect(() => {
    if (!textValue.text) {
      setTextCount(0)
      setHalfSpaceCount(0)
      setFullSpaceCount(0)
      setNewLineCount(0)
      return
    }
    const texts = textValue.text.split("").length
    const halfSpaces = textValue.text.split(" ").length - 1
    const fullSpaces = textValue.text.split("　").length - 1
    const newLines = textValue.text.split(/\r\n|\r|\n/).length - 1
    const papers = Math.round((texts * 10) / 400) / 10
    setTextCount(texts - halfSpaces - fullSpaces - newLines)
    setHalfSpaceCount(halfSpaces)
    setFullSpaceCount(fullSpaces)
    setNewLineCount(newLines)
    setPaperCount(papers)
  }, [textValue])

  return (
    <Flex dir="row">
      <Text>
        {textCount} 文字　空白：
        {halfSpaceCount + fullSpaceCount}　改行：{newLineCount}
      </Text>
    </Flex>
  )
}
export default Counter
