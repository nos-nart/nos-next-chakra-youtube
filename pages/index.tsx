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
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 7px;
        }
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 1000px 1000px 20000px #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          -webkit-box-shadow: inset 10px 10px 60px #4e4c4e;
        }
      `}</style>
    </>
  )
}
