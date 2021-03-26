import React from 'react';
import { VStack, useColorMode, Flex, Text } from '@chakra-ui/react';
import { FiHome } from "react-icons/fi";
import { IoTrailSignOutline } from "react-icons/io5";

import { NextChakraLink } from '../NextChakraLink';

type MenuItemProps = {
  children: React.ReactNode,
  icon?: any,
  isActive?: boolean
}

function MenuItem({ children, icon, isActive }: MenuItemProps) {
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
      <MenuItem icon={<FiHome size={22} />} isActive={true}>Home</MenuItem>
      <MenuItem icon={<IoTrailSignOutline size={22} />}>Explore</MenuItem>
    </VStack>
  )
}
