import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
  import Link from 'next/link';
  import {
    SubmitHandler,
    useForm
  } from 'react-hook-form'
  import * as yup from 'yup'
  import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

interface CreateUserFormData {
  email: string
  password: string
  passwordConfirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail invalido.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'No mínimo 6 caracteres.'),
  confirm_password: yup.string().oneOf([null, yup.ref('password')], 'Senhas precisam ser iguais.')
})

export default function CreteUser() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Box>
      <Header />

      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          background="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700"/>

          <Stack direction="column" spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                type="password"
                name="password"
                label="Senha"
                {...register("password")}
                error={errors.password}
              />
              <Input
                type="password"
                name="confirm_password"
                label="Confirme sua senha"
                {...register("confirm_password")}
                error={errors.confirm_password}
              />
            </SimpleGrid>
          </Stack>

          <Flex marginTop="8" justifyContent="flex-end">
            <Stack direction="row" spacing="4">
              <Link href="/users" passHref={true}>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}