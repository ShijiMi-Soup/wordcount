import { Flex, FlexProps } from "@chakra-ui/react"
import CopyButton from "./CopyButton"
import Settings from "./SettingsButton"
import ThemeSwitcher from "./ThemeSwitcher"

const Widgets = (props: FlexProps) => {
  return (
    <Flex
      pos="relative"
      flexDir="row"
      alignItems="center"
      justifyContent="space-evenly"
      {...props}
    >
      <CopyButton />
      <Settings />
      <ThemeSwitcher />
    </Flex>
  )
}
export default Widgets
