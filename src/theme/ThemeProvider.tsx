"use client";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import system from "./system";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme"
      disableTransitionOnChange
    >
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </NextThemeProvider>
  );
}
