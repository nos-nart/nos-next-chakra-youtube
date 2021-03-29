import React from 'react';
import {
  VStack,
  useColorMode,
  Flex,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Avatar
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

type ChannelSubscribeProps = {
  children: React.ReactNode,
  image?: string,
  name?: string
};

function ChannelSubscribe({ children, image, name }: ChannelSubscribeProps) {
  return (
    <NextChakraLink
      href={'#'}
      width={'full'}
      px={8}
      py={1}
    >
      <Flex alignItems={'center'}>
        <Avatar size={'sm'} name={name} src={image} />
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
      w={{ base: 'full', md: '275px' }}
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
      <ChannelSubscribe
        image="https://yt3.ggpht.com/ytc/AAUvwnhYlovsRlS09Tf42tvDdYlo7iaNAjvXldz9rzYA-Q=s88-c-k-c0x00ffffff-no-rj"
        name="big bang">BIG BANG</ChannelSubscribe>
      <ChannelSubscribe
        image="https://yt3.ggpht.com/ytc/AAUvwnhe9wbHHLmE3z489Qa9SxCJXz0W44Aq89VWXdMVBw=s88-c-k-c0x00ffffff-no-rj"
        name="bi">Business Insider</ChannelSubscribe>
      <ChannelSubscribe
        image="https://yt3.ggpht.com/ytc/AAUvwng1MRZYX2Dyyp_2xUgIuabiGJktbTqyLPfMRJKOtw=s88-c-k-c0x00ffffff-no-rj"
        name="imagine dragons">ImagineDragons</ChannelSubscribe>
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
      <Wrap px={6} textColor={'gray.400'}>
        <WrapItem>About</WrapItem>
        <WrapItem>Press</WrapItem>
        <WrapItem>Copyright</WrapItem>
        <WrapItem>Contact us</WrapItem>
        <WrapItem>Creators</WrapItem>
        <WrapItem>Advertise</WrapItem>
        <WrapItem>Developer</WrapItem>
      </Wrap>
      <Wrap py={2} px={6} textColor={'gray.400'}>
        <WrapItem>Teams</WrapItem>
        <WrapItem>Privacy</WrapItem>
        <WrapItem>Policy & Safety</WrapItem>
        <WrapItem>How YouTube works</WrapItem>
        <WrapItem>Test new features</WrapItem>
      </Wrap>
      <Text w={'full'} fontSize={'xs'} color={'gray.400'} pb={2} px={6}>@ {new Date().getFullYear()} Google LLC</Text>
    </VStack>
  )
}
