import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube</title>
      </Head>
      <Navbar />
      <Flex>
        <Sidebar isMinimized={false} />
      </Flex>
    </>
  )
}
