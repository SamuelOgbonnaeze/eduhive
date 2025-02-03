"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"
import type { ThemeProviderProps } from "next-themes"  // Import ThemeProviderProps

export function Provider(props: ThemeProviderProps) {  // Use ThemeProviderProps
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  )
}