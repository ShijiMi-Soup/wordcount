import { ChakraProvider } from "@chakra-ui/react"

import theme from "../theme"
import { AppProps } from "next/app"
import MainLayout from "../layouts/MainLayout"
import { SettingsProvider, TextValueProvider } from "../providers"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SettingsProvider>
        <TextValueProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </TextValueProvider>
      </SettingsProvider>
    </ChakraProvider>
  )
}

export default MyApp
