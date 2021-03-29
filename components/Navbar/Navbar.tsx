import React, { Dispatch, SetStateAction } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import { Search } from './Search';
import { NavbarLeft } from './NavbarLeft';
import { NavbarRight } from './NavbarRight';

type NavbarProps = {
  isMinimized?: boolean,
  setIsMinimized?: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({ isMinimized, setIsMinimized }: NavbarProps): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      h={'14'}
      px={4}
      w={'full'}
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      borderBottom={'1px'}
      borderBottomColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      position={'fixed'}
      top={0}
      left={0}
      zIndex={99}
    >
      <NavbarLeft
        isMinimized={isMinimized}
        setIsMinimized={setIsMinimized}
      />
      <Search />
      <NavbarRight />
    </Flex>
  )
}
