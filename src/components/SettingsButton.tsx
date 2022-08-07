import { useState } from "react"
import { SettingsIcon } from "@chakra-ui/icons"
import {
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverFooter
} from "@chakra-ui/react"
import Settings from "./Settings"

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleButtonClick = () => {
    setIsOpen(true)
  }
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label={"Settings"}
          icon={<SettingsIcon />}
          borderRadius="full"
          onClick={handleButtonClick}
          variant="ghost"
        />
      </PopoverTrigger>
      <PopoverContent
        mr="10"
        w="max-content"
        h={isOpen ? "max-content" : "0px"}
        overflowY={isOpen ? "auto" : "hidden"}
      >
        <PopoverHeader>Settings</PopoverHeader>
        <PopoverBody>
          <Settings />
        </PopoverBody>
        <PopoverFooter>
          <footer>
            <Text display="block" textAlign="center" fontSize="small">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://shijimi.dev">SHijiMi</a>
            </Text>
          </footer>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
export default SettingsButton
