import { Badge, Box, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Avatar, Image as ChakraImage } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import numeral from "numeral";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import { GoVerified } from "react-icons/go";
import { getUserProfile } from "../../utils/getData";

dayjs.extend(relativeTime);
dayjs.extend(duration);

interface VideoProps {
  video?: any;
  id?: string;
}

export const Video: React.FC<VideoProps> = ({ video, id }) => {
  let { contentDetails, snippet, statistics } = video;
  let { channelTitle, publishedAt, title, thumbnails } = snippet;
  const [user, setUser] = useState<any>();

  const up = async () => {
    let user = await getUserProfile(snippet.channelId);
    setUser(user);
  };

  useEffect(() => {
    up();
  }, []);

  return (
    <Box maxW="360px" maxH="300px" mb="1.5em" key={id}>
      <Box position="relative">
        <ChakraImage
          w={{ base: "29em", md: "27em", lg: "25em", xl: "23em" }}
          src={thumbnails.medium.url}
          alt="Thumbnail"
        />
        <Badge
          position="absolute"
          bottom={1}
          right={1}
          bg="gray.900"
          fontSize="14px"
          color="white"
        >
          {dayjs.duration(contentDetails.duration).format('m:ss')}
        </Badge>
      </Box>
      <Flex mt="0.5em" boxSizing="border-box">
        {user ? (
          <Avatar src={user.items[0].snippet.thumbnails.default.url} />
        ) : (
          <Avatar bg="gray.500" />
        )}

        <Box ml="3">
          <Text fontWeight="bold" maxW="25em" maxH="3em" overflow="hidden">
            {title}
          </Text>
          <HStack>
            <Text fontSize={'sm'}>{channelTitle}</Text>
            <Text fontSize={'sm'}>{true ? <GoVerified /> : null}</Text>
          </HStack>
          <HStack spacing="0.1em" minW="160px">
            <Text fontSize={'sm'}>
              {numeral(statistics.viewCount).format("Oa").toUpperCase()}
            </Text>
            <BsDot />
            <Text fontSize={'sm'}>{dayjs(publishedAt).fromNow()}</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
