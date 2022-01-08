import {
  Flex,
  Button,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding="8"
        borderRadius="8px"
        flexDirection="column"
      >
        <Stack direction="column" spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
          />
          <Input
            name="password"
            label="Senha"
            type="password"
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
