import Head from 'next/head'
import {
  Box,
  Image
} from "@chakra-ui/react"
import Form from '../components/form'

export default function Home() {
  return (
    <Box width="100%" height="100vh" justifyContent="center" alignItems="center" display="flex">
      <Head>
        <title>Github Profile</title>
        <meta name="description" content="Get details of users in github!" />
      </Head>
      <Box
        border="1px solid black"
        borderRadius="10px"
        padding="1rem"
        flexDirection="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#f7f7f7"
      >
        <Image
          height="200px"
          src="./favicon.ico"
          alt="github-logo" />
        <Form />
      </Box>
    </Box>
  )
}
