import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react';
import Link from 'next/link'
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  title: string
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref={true}>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text marginLeft="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </Link>
  )
}