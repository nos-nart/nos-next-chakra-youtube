import React from 'react';
import { Flex, VStack, useColorMode } from '@chakra-ui/react';
import {
  IoHomeOutline,
  IoTimeOutline
} from "react-icons/io5";
import { ImFire } from "react-icons/im";

import { NextChakraLink } from '../NextChakraLink';
import { SubscriptionIcon, GamingIcon, LibraryIcon } from '../svgs';

type SidebarItemSmallProps = {
  children: React.ReactNode,
  icon?: any,
  isActive?: boolean
}

function SidebarItemSmall({ children, icon, isActive }: SidebarItemSmallProps) {
  const { colorMode } = useColorMode();
  const bg = colorMode === 'light' ? 'gray.200' : 'gray.700';

  return (
    <NextChakraLink
      href={'#'}
      width={'full'}
      h={'5rem'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      fontSize={'xs'}
      px={2}
      background={isActive ? bg : ''}
    >
      {icon}
      {children}
    </NextChakraLink>
  )
}

export const MenubarSmall = (): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      h={'full'}
      borderRight={'1px'}
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <SidebarItemSmall isActive={true} icon={<IoHomeOutline size={22} />}>Home</SidebarItemSmall>
      <SidebarItemSmall icon={<ImFire size={22} />}>Trending</SidebarItemSmall>
      <SidebarItemSmall icon={<SubscriptionIcon width={25} />}>Subscriptions</SidebarItemSmall>
      <SidebarItemSmall icon={<LibraryIcon width={25} />}>Library</SidebarItemSmall>
      <SidebarItemSmall icon={<IoTimeOutline size={22} />}>History</SidebarItemSmall>
    </VStack>
  )
}
