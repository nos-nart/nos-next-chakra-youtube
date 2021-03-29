import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsList } from "react-icons/bs";
import { YoutubeIcon } from '../svgs';
import { Menubar } from "./Menubar";

interface DrawerMenuProps {}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<BsList size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={onOpen}
        display={{ base: "inline-flex", xl: "none" }}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <YoutubeIcon width={30} cursor="pointer" />
          </DrawerHeader>
          <DrawerBody className="scrollbar" paddingX={0}>
            <Menubar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
