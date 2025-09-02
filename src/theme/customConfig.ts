import { defineConfig } from "@chakra-ui/react";

export const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Figtree', sans-serif" },
        body:    { value: "'Figtree', sans-serif" },
      },
      colors: {
        primary: {
          500: { value: "#3182ce" },
          600: { value: "#2b6cb0" },
        },
      },
    },
  },
});