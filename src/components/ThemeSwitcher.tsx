import { useColorMode, IconButton } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      borderRadius="full"
      aria-label="Toggle Theme"
      variant="ghost"
      onClick={toggleColorMode}
    />
  )
}
export default ThemeSwitcher
