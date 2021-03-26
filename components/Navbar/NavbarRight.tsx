import React from 'react';
import { Box, IconButton, Flex, Text } from '@chakra-ui/react';
import {
  RiUserReceivedLine,
}
from "react-icons/ri";

import { YoutubeApp } from './YoutubeApp';
import { Setting } from './Setting';

export const NavbarRight = (): JSX.Element => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <YoutubeApp />
      <Setting />
      <Box
        as={'button'}
        p={1}
        border={'2px'}
        borderColor={"blue.500"}
        color={'blue.500'}
      >
        <Flex alignItems={'center'}>
          <RiUserReceivedLine size={20} />
          <Text ml={2}>SIGN IN</Text>
        </Flex>
      </Box>
    </Box>
  )
}
