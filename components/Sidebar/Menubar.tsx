import React from 'react';
import {
  VStack,
  useColorMode,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FiHome, FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import {
  IoTrailSignOutline,
  IoTimeOutline,
  IoFilmOutline,
  IoSyncOutline,
  IoHeartSharp,
  IoChevronDownOutline,
  IoRadioOutline,
  IoTrophyOutline,
  IoSettingsOutline,
  IoFlagOutline
} from "react-icons/io5";

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
      className="menubar"
      h={'full'}
      w={'250px'}
      borderRight={'1px'}
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      overflowY={'scroll'}
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
      <SidebarItem icon={<IoChevronDownOutline size={22} />}>Show more</SidebarItem>
      <Divider />
      <Text px={'6'} fontWeight={'bold'} w={'full'}>SUBSCRIPTIONS</Text>
      <Divider />
      <Text px={'6'} fontWeight={'bold'} w={'full'}>MORE FROM YOUTUBE</Text>
      <SidebarItem icon={<GamingIcon width={25} />}>Gaming</SidebarItem>
      <SidebarItem icon={<IoRadioOutline size={22} />}>Live</SidebarItem>
      <SidebarItem icon={<IoTrophyOutline size={22} />}>Sport</SidebarItem>
      <Divider />
      <SidebarItem icon={<IoSettingsOutline size={22} />}>Setting</SidebarItem>
      <SidebarItem icon={<IoFlagOutline size={22} />}>Report history</SidebarItem>
      <SidebarItem icon={<FiHelpCircle size={22} />}>Help</SidebarItem>
      <SidebarItem icon={<FiMessageSquare size={22} />}>Send feedback</SidebarItem>
      <Divider />
      <Text fontSize={'xs'} color={'gray.400'}>@ {new Date().getFullYear()} Google LLC</Text>
    </VStack>
  )
}
