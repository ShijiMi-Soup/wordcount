import { Heading, Box } from "@chakra-ui/react"

import { FlexContainer } from "../components/FlexContainer"
import { useState } from "react"
import Textarea from "../components/Textarea"

const Index = () => {
  const states = {
    textValue: useState<string | undefined>()
  }

  return (
    <FlexContainer w="100%" height="100%">
      <Textarea textValueState={states.textValue} w="100%" flexGrow={1} />
    </FlexContainer>
  )
}

export default Index
