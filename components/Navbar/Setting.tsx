import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  IconButton,
  MenuDivider,
  useColorMode
} from "@chakra-ui/react";
import {
  RiMore2Fill,
  RiSunFill,
  RiMoonFill,
  RiSettings5Line,
  RiShieldUserLine,
  RiInformationLine,
  RiMessage2Line,
  RiKeyboardBoxLine
}
from "react-icons/ri";
import { IoEarthOutline, IoLanguage } from "react-icons/io5";

const upperFirstLetter = (str: string): string => str[0].toUpperCase() + str.substr(1)

export const Setting = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="settings"
        icon={<RiMore2Fill size={20} />}
        size="xs"
        variant={'ghost'}
        mx={4}
      />
      <MenuList>
        <MenuItem
          icon={colorMode === 'light' ? <RiSunFill size={25} /> : <RiMoonFill size={25} /> }
          onClick={toggleColorMode}
        >
          {`Appearance: ${upperFirstLetter(colorMode)}`}
        </MenuItem>
        <MenuItem icon={<IoLanguage size={20} />}>
          Language
        </MenuItem>
        <MenuItem icon={<IoEarthOutline size={20} />}>
          Location: Vietnam
        </MenuItem>
        <MenuItem icon={<RiSettings5Line size={20} />}>
          Setting
        </MenuItem>
        <MenuItem icon={<RiShieldUserLine size={20} />}>
          Your data in YouTube
        </MenuItem>
        <MenuItem icon={<RiInformationLine size={20} />}>
          Help
        </MenuItem>
        <MenuItem icon={<RiMessage2Line size={20} />}>
          Send feedback
        </MenuItem>
        <MenuItem icon={<RiKeyboardBoxLine size={20} />}>
          Keyboard shortcuts
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          Restrict Mode: Off
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
