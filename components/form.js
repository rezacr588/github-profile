import {
  Input,
  useToast,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
} from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getProfile } from '../api/gitApi'

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [username,setUsername] = useState("")
  const router = useRouter()
  const toast = useToast()
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const profile = await getProfile(username)
    if (!profile.message) {
      router.push("/profile/" + profile.login)
    } else {
      toast({
        title: profile.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      setIsLoading(false)
    }
  };
  useEffect(() => {
    setIsLoading(false)
  }, [])
  const handleChange = (event) => setUsername(event.target.value)
  return (
    <form style={{ width: "100%" }} onSubmit={handleOnSubmit}>
      <Stack width="100%">
        <FormControl id="username">
          <FormLabel>Github Username</FormLabel>
          <Input
            focusBorderColor="black" 
            value={username}
            onChange={handleChange}
            placeholder="Please enter the username ..."
            name="username"
          />
          <FormHelperText>Getting user repos and details</FormHelperText>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Loading ..."
          type="submit"
          colorScheme="blackAlpha"
        >
          Get User
        </Button>
      </Stack>
    </form>
  )
}
