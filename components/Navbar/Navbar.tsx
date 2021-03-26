import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import { Search } from './Search';
import { NavbarLeft } from './NavbarLeft';
import { NavbarRight } from './NavbarRight';

export const Navbar = (): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      h={'14'}
      px={4}
      w={'full'}
      borderBottom={'1px'}
      borderBottomColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <NavbarLeft />
      <Search />
      <NavbarRight />
    </Flex>
  )
}
