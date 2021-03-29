import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Videos } from '@/components/Content';

export default function Home() {
  const [isMinimized, setIsMinimized] = React.useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }

  return (
    <>
      <Head>
        <title>YouTube</title>
      </Head>
      <Navbar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <Flex mt={'14'}>
        <Sidebar isMinimized={isMinimized} />
        <Videos />
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
