import React from 'react';
import { Box } from '@chakra-ui/react';
import { MenubarSmall, Menubar } from '.';

type SidebarProps = {
  isMinimized?: boolean
}

export const Sidebar = ({ isMinimized }: SidebarProps): JSX.Element => {
  return (
    <Box style={{ height: 'calc(100vh - 3.5rem)'}}
      display={{ base: "none", xl: "block" }}
      position={'fixed'}
      left={0}
      top={'14'}
    >
      {isMinimized ? <MenubarSmall /> : <Menubar /> }
    </Box>
  )
}
