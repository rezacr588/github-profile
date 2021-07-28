import { AtSignIcon, LinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { MdPeopleOutline } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"
import { BsDot } from "react-icons/bs"
import { useGithubContext } from "../context"

export default function UserDetails() {
  const { state: { profile } } = useGithubContext();
  return (
    <Box>
      <Image
        src={profile.avatar_url}
        alt={profile.login}
        borderRadius="50%"
        width="100%"
        padding="2rem"
      />
      <Heading size="lg">
        {profile.name}
      </Heading>
      <Text size="md" color="gray">
        <AtSignIcon /> {profile.login}
      </Text>
      {profile.bio && <Text padding="1rem" size="sm" >
        {profile.bio}
      </Text>} 
      <Text paddingBottom="1rem" size="sm">
        <Icon as={MdPeopleOutline} />
        <Text as="span" fontWeight="bold"> {profile.followers} </Text>
        <Text as="span"> followers </Text>
        <Icon as={BsDot} />
        <Text as="span" fontWeight="bold"> {profile.following} </Text>
        <Text as="span"> following </Text>
      </Text>
      {profile.location && <Text> <Icon as={HiLocationMarker} /> {profile.location}</Text> }
      {profile.blog && <Text> <LinkIcon /> {profile.blog}</Text> }
    </Box>
  )
}