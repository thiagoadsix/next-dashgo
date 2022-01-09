import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine, 
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine} title="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} title="Usuários" />
      </NavSection>
      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine} title="Formulários" />
        <NavLink href="/automation" icon={RiGitMergeLine} title="Automação" />
      </NavSection>
    </Stack>
  )
}