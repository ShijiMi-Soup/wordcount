import { Box, Flex, Text } from "@chakra-ui/react"
import Counter from "./Counter"
import Widgets from "./Widgets"
const Footer = () => {
  return (
    <Box
      display="flex"
      flexFlow="row nowrap"
      alignItems="center"
      justifyContent="center"
      width="100%"
      m={0}
      p={0}
    >
      <Box width="33.33%" />
      <Flex width="33.33%" dir="column" align="center" justify="center">
        <Counter />
      </Flex>
      <Widgets width="33.33%" paddingX="10" />
    </Box>
  )
}
export default Footer
