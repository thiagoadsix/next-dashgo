import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      DashGO
      <Text color="pink.500" as="span" marginLeft="1">.</Text>
    </Text>
  )
}