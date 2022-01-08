import {
  Icon,
  Link,
  Text
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps {
  icon: ElementType
  title: string
}

export function NavLink({ title, icon }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20"/>
      <Text marginLeft="4" fontWeight="medium">{title}</Text>
    </Link>
  )
}