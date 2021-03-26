import React from 'react';
import { Box } from '@chakra-ui/react';
import { MenubarSmall, Menubar } from '.';

type SidebarProps = {
  isMinimized?: boolean
}

export const Sidebar = ({ isMinimized }: SidebarProps): JSX.Element => {
  return (
    <Box style={{ height: 'calc(100vh - 3.5rem)'}}>
      {isMinimized ? <MenubarSmall /> : <Menubar /> }
    </Box>
  )
}
