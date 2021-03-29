import React, { Dispatch, SetStateAction} from 'react';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from "react-icons/ri";

import { DrawerMenu } from '../Sidebar/DrawerMenu';
import { YoutubeIcon } from '../svgs';

type NavbarLeftProps = {
  isMinimized?: boolean,
  setIsMinimized?: Dispatch<SetStateAction<boolean>>
}


export const NavbarLeft = ({ isMinimized, setIsMinimized}: NavbarLeftProps): JSX.Element => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <IconButton
        size={'sm'}
        variant={'ghost'}
        aria-label={'menu'}
        marginLeft="2"
        color="current"
        onClick={() => setIsMinimized(!isMinimized)}
        icon={<RiMenuLine size={20} />}
        display={{ base: "none", xl: "inline-flex" }}
      />
      <DrawerMenu />
      <Flex alignItems={'center'} ml={2}>
        <YoutubeIcon width={30} />
        <Text ml={1}>YouTube</Text>
      </Flex>
    </Box>
  )
}
