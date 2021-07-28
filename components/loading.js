import { Box, Spinner } from "@chakra-ui/react";

export default function Loading({loading}) {
  return <> {loading && <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="rgba(0,0,0,0.2)"
        padding="10% 35%"
        zIndex="2"
      >
        <Box
          background="white"
          padding="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" />
        </Box>
      </Box>} </>
}