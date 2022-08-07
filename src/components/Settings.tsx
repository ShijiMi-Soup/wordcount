import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from "@chakra-ui/react"
import { useSettingsStateContext } from "../providers/SettingsProvider"
const Settings = () => {
  const [settings, setSettings] = useSettingsStateContext()
  const handleChange = (value: number) => {
    setSettings({ ...settings, fontSize: value })
  }
  return (
    <Box>
      <Flex dir="row">
        <Text mr={4}>Font Size: </Text>
        <Slider
          value={settings.fontSize}
          min={6}
          max={48}
          step={2}
          onChange={handleChange}
          w={24}
          mr={4}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb></SliderThumb>
        </Slider>
        <Text>{settings.fontSize}px</Text>
      </Flex>
    </Box>
  )
}
export default Settings
