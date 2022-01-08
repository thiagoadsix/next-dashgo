import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {
        !isWideVersion && (
          <IconButton
            icon={<Icon as={RiMenuLine}/>}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            aria-label="Open navigation"
            marginRight="2"
          />
        )
      }

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex alignItems="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}