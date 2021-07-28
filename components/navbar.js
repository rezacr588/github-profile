import { Button, Container, Image, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  const handleHomeClick = () => router.push("/")
  return (
    <Container maxW="container.lg" padding="10px" borderBottom="1px solid #000">
      <HStack alignItems="center" spacing="100px">
        <Image
          src="/logo.png"
          width="100px"
          height="55px"
          alt="Github Logo"
        />
        <Button variant="link" onClick={handleHomeClick}>
          Home
        </Button>
      </HStack>
    </Container>
  )
}