import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function Registration({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider>
      <SessionProvider session={ session }>
        <Component { ...pageProps } />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default Registration
