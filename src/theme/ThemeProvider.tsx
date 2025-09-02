"use client";

import { ChakraProvider }      from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import system from "./system";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </NextThemeProvider>
  );
}
