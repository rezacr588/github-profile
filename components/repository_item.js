import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon, Text } from "@chakra-ui/react";
import { RiGitRepositoryFill } from "react-icons/ri"

export default function RepositoryItem({ repository }) {
  return <Box padding="1rem" borderRadius="15px" border="1px solid gray">
    <Text padding=".5rem">
      <Icon as={RiGitRepositoryFill} /> {repository.name}
    </Text>
    {
      repository.description && <Text
        paddingTop="1rem"
        paddingBottom="2rem"
        size="sm"
      >
        {repository.description}
      </Text>
    }
    <Text><StarIcon /> {repository.stargazers_count}</Text>
  </Box>
}