import { CopyIcon } from "@chakra-ui/icons"
import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useClipboard
} from "@chakra-ui/react"
import { useTextValueContext } from "../providers"
const CopyButton = () => {
  const [textValue, setTextValue] = useTextValueContext()
  const { hasCopied, onCopy } = useClipboard(textValue.text)
  return (
    <Popover isOpen={hasCopied}>
      <PopoverTrigger>
        <IconButton
          onClick={onCopy}
          aria-label={"copy-to-clipboard"}
          icon={<CopyIcon />}
          borderRadius="full"
          variant="ghost"
        />
      </PopoverTrigger>
      <PopoverContent
        w="max-content"
        px="4"
        py="2"
        fontSize="sm"
        border="none"
        boxShadow="0 3px 10px #00000011"
      >
        コピーしました！
      </PopoverContent>
    </Popover>
  )
}
export default CopyButton
