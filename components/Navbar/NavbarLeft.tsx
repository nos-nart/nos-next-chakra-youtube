import React from 'react';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from "react-icons/ri";

import { YoutubeIcon } from '../svgs';

export const NavbarLeft = (): JSX.Element => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <IconButton
        size={'sm'}
        variant={'ghost'}
        aria-label={'menu'}
        marginLeft="2"
        color="current"
        icon={<RiMenuLine size={20} />}
      />
      <Flex alignItems={'center'} ml={2}>
        <YoutubeIcon width={30} />
        <Text ml={1}>YouTube</Text>
      </Flex>
    </Box>
  )
}
