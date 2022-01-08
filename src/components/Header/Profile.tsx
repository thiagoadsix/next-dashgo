import {
  Avatar,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>Thiago Andrade Silva</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          thiago.adsix@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Thiago Andrade" src="https://github.com/thiagoadsix.png" />
  </Flex>
  )
}