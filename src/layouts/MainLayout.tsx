import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "../components/Footer"
type MainLayoutProps = {
  children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      as="main"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h="100vh"
      p={5}
      overflow="hidden"
    >
      <Heading as="h1" display="none">
        文字数カウンター
      </Heading>
      <Box as="section" w="100%" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
