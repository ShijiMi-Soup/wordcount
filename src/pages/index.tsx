import {
  Link as ChakraLink,
  Heading,
  Textarea,
  Text,
  Box
} from "@chakra-ui/react"

import { Container } from "../components/Container"
import { useEffect, useState } from "react"

const Index = () => {
  const year = new Date().getFullYear()
  const [textValue, setTextValue] = useState<string | undefined>()
  const [textCount, setTextCount] = useState<number>(0)
  const [halfSpaceCount, setHalfSpaceCount] = useState<number>(0)
  const [fullSpaceCount, setFullSpaceCount] = useState<number>(0)
  const [newLineCount, setNewLineCount] = useState<number>(0)
  const [paperCount, setPaperCount] = useState<number>(0)

  const handleInputChange = (e) => {
    const { value } = e.target
    setTextValue(value)
  }

  useEffect(() => {
    if (!textValue) {
      setTextCount(0)
      setHalfSpaceCount(0)
      setFullSpaceCount(0)
      setNewLineCount(0)
      return
    }
    const texts = textValue.split("").length
    const halfSpaces = textValue.split(" ").length - 1
    const fullSpaces = textValue.split("　").length - 1
    const newLines = textValue.split(/\r\n|\r|\n/).length - 1
    const papers = Math.round((texts * 10) / 400) / 10
    setTextCount(texts - halfSpaces - fullSpaces - newLines)
    setHalfSpaceCount(halfSpaces)
    setFullSpaceCount(fullSpaces)
    setNewLineCount(newLines)
    setPaperCount(papers)
  }, [textValue])

  return (
    <Container height="100vh" py={5}>
      <Box w="100%" display="flex" flexDir="column" alignItems="center">
        <Heading as="h1">文字数カウンタ</Heading>
        <Box>
          <Text>{textCount}文字</Text>
          <Text>
            半角スペース
            {halfSpaceCount}
            文字
          </Text>
          <Text>
            全角スペース
            {fullSpaceCount}
            文字
          </Text>
          <Text>改行{newLineCount}文字</Text>
          <Text>原稿用紙{paperCount}枚</Text>
        </Box>
      </Box>
      <Textarea
        flexGrow={1}
        value={textValue}
        onChange={handleInputChange}
        placeholder="文字を入力してください"
        resize="none"
        border="none"
        focusBorderColor="none"
      />
      <footer>&copy; {year} SHijiMi</footer>
    </Container>
  )
}

export default Index
