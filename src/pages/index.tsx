import {
  Flex,
  Button,
  Stack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

interface SignInFormaData {
  email: string
  password: string
}

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm()

  const handleSignIn: SubmitHandler<SignInFormaData> = async (data)=>  {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack direction="column" spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            {...register("email")}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
