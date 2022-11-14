import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w='100%' h='50vh' justify='center' align='center'>
      <Button>
        Connect
      </Button>
    </Flex>
  )
}
