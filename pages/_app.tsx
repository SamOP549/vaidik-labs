import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import { MantineProvider } from '@mantine/core';
import Footer from '@/components/Footer'
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (
    <>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </MantineProvider>
    </>
  );
}
