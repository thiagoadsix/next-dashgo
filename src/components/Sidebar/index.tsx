import {
  Box,
  Stack,
} from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine, 
  RiInputMethodLine
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} title="Dashboard" />
          <NavLink icon={RiContactsLine} title="Usuários" />
        </NavSection>
        <NavSection title="Automação">
          <NavLink icon={RiInputMethodLine} title="Formulários" />
          <NavLink icon={RiGitMergeLine} title="Automação" />
        </NavSection>
      </Stack>
    </Box>
  )
}