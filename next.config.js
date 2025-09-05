// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  // aquí puedes añadir otras opciones de Next.js
};

module.exports = nextConfig;
