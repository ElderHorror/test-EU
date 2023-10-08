'use client'
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Extended Theme

const fonts = {
  body: 'Plus Jakarta Sans',
  heading: 'Plus Jakarta Sans'
}

const theme = extendTheme({fonts})

export default function Providers({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

