/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN,
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
  },
};

export default nextConfig;
