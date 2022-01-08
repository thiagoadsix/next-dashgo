import {
  Flex,
  Input,
  Text,
  Icon,
  Stack,
  Box,
  Avatar
} from '@chakra-ui/react'
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine
} from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        DashGO
        <Text color="pink.500" as="span" marginLeft="1">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <Stack
          direction="row"
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine}  fontSize="20" />
          <Icon as={RiUserAddLine}  fontSize="20"  />
        </Stack>

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
      </Flex>
    </Flex>
  )
}