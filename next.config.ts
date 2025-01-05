import type { NextConfig } from 'next';
import removeImports from 'next-remove-imports'

module.exports = removeImports()({});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
