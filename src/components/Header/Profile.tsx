import {
  Avatar,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {
        showProfileData && (
          <Box marginRight="4" textAlign="right">
            <Text>Thiago Andrade Silva</Text>
            <Text
              color="gray.300"
              fontSize="small"
            >
              thiago.adsix@gmail.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Thiago Andrade" src="https://github.com/thiagoadsix.png" />
  </Flex>
  )
}