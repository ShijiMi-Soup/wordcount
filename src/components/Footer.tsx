import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { useEffect } from "react"
import Counter from "./Counter"
import Widgets from "./Widgets"
const Footer = () => {
  const isSmallWindow = useBreakpointValue({
    base: true,
    md: false
  })
  useEffect(() => {
    console.log(isSmallWindow)
  }, [isSmallWindow])
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
      {!isSmallWindow && <Box width="33.33%" />}
      <Flex
        width={{ base: "50%", md: "33.33%" }}
        dir="column"
        align="center"
        justify="center"
      >
        <Counter />
      </Flex>
      <Widgets width={{ base: "50%", md: "33.33%" }} paddingX="10" />
    </Box>
  )
}
export default Footer
