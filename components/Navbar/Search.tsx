import React from 'react';
import { Box, Flex, InputGroup, Input, InputRightAddon, IconButton } from '@chakra-ui/react';
import { RiSearchLine, RiMicLine } from "react-icons/ri";

export const Search = (): JSX.Element => {
  return (
    <Flex
      alignItems={'center'}
      display={{ base: "none", md: "flex" }}
      w={{ base: "0em", sm: "5em", md: "15em", lg: "30em", xl: "35em" }}
    >
      <InputGroup size={'sm'}>
        <Input placeholder="Search" />
        <InputRightAddon>
          <Box
            as={'button'}
          >
            <RiSearchLine size={17} />
          </Box>
        </InputRightAddon>
      </InputGroup>
      <IconButton
        size={'md'}
        variant={'ghost'}
        aria-label={'voice search'}
        marginLeft="2"
        color="current"
        icon={<RiMicLine size={17} />}
      />
    </Flex>
  )
}
