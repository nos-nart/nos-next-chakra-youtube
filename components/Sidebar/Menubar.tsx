import React from 'react';
import {
  VStack,
  useColorMode,
  Flex,
  Text,
  Divider,
  Menu,
  MenuList,
  MenuButton,
  Button
} from '@chakra-ui/react';
import { FiHome } from "react-icons/fi";
import { IoTrailSignOutline, IoTimeOutline, IoFilmOutline, IoSyncOutline, IoHeartSharp } from "react-icons/io5";

import { NextChakraLink } from '../NextChakraLink';
import { SubscriptionIcon, GamingIcon, LibraryIcon } from '../svgs';

type SidebarItemProps = {
  children: React.ReactNode,
  icon?: any,
  isActive?: boolean
}

function SidebarItem({ children, icon, isActive }: SidebarItemProps) {
  const { colorMode } = useColorMode();
  const bg = colorMode === 'light' ? 'gray.200' : 'gray.700';

  return (
    <NextChakraLink
      href={'#'}
      width={'full'}
      px={8}
      py={3}
      background={isActive ? bg : ''}
    >
      <Flex alignItems={'center'}>
        {icon}
        <Text ml={4}>
          {children}
        </Text>
      </Flex>
    </NextChakraLink>
  )
}

export const Menubar = (): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      h={'full'}
      w={'250px'}
      borderRight={'1px'}
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <SidebarItem icon={<FiHome size={22} />} isActive={true}>Home</SidebarItem>
      <SidebarItem icon={<IoTrailSignOutline size={22} />}>Explore</SidebarItem>
      <SidebarItem icon={<SubscriptionIcon width={25} />}>Subscription</SidebarItem>
      <Divider />
      <SidebarItem icon={<LibraryIcon width={25} />}>Library</SidebarItem>
      <SidebarItem icon={<IoTimeOutline size={22} />}>History</SidebarItem>
      <SidebarItem icon={<IoFilmOutline size={22} />}>Your videos</SidebarItem>
      <SidebarItem icon={<IoSyncOutline size={22} />}>Watch later</SidebarItem>
      <SidebarItem icon={<IoHeartSharp size={22} />}>Like videos</SidebarItem>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
      </Menu>
    </VStack>
  )
}
