import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   basePath: '/NextJS-GithubActions', // Replace <repository-name> with your GitHub repository name
   assetPrefix: '/NextJS-GithubActions/',
};

export default nextConfig;
