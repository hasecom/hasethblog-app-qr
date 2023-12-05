'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
type chakraProviders = {
  children: React.ReactNode 
}
const ChakraProviders = ({children }:chakraProviders) =>{ 
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
export default ChakraProviders;