import Header from '../components/Header'
import { Box, Heading, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Header description="A template using Next and Chakra UI with Typescript" />
      <Center h="100vh">
        <Heading>
          {'A template with Next & Chakra UI in Typescript - enjoy!'}
        </Heading>
      </Center>
    </Box>
  )
}
