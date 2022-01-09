import {
  Flex,
  Button,
  Stack
} from '@chakra-ui/react'
import {
  SubmitHandler,
  useForm
} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail invalido.'),
  password: yup.string().required('Senha obrigatória.')
})

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (data)=>  {
    await new Promise(resolve => setTimeout(resolve, 2000))
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
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
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
