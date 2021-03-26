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
  MenuDivider
} from "@chakra-ui/react";
import { YoutubeAppIcon, YoutubeKidIcon, YoutubeMusicIcon, YoutubeIcon, YoutubeTVIcon } from '../svgs';

export const YoutubeApp = (): JSX.Element => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="apps"
        icon={<YoutubeAppIcon width={25} />}
        size="xs"
        variant={'ghost'}
      />
      <MenuList>
        <MenuItem icon={<YoutubeTVIcon width={25} />}>
          YouTube TV
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<YoutubeMusicIcon width={25} />}>
          YouTube Music
        </MenuItem>
        <MenuItem icon={<YoutubeKidIcon width={25} />}>
          YouTube Kids
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<YoutubeIcon width={30} />}>
          Creator Academy
        </MenuItem>
        <MenuItem icon={<YoutubeIcon width={30} />}>
          YouTube for Artists
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
