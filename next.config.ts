import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'color-functions', 'global-builtin', 'import'],
    quietDeps: true,
  },
};

export default nextConfig;
