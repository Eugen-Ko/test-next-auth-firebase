import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function Registration({ Component, pageProps }) {
  return <ChakraProvider><Component { ...pageProps } /></ChakraProvider>
}

export default Registration
