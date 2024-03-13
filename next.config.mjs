/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // unoptimized: true,
    env: {
        NEXT_PUBLIC_API: 'http://localhost:8080/api',
    }
}

module.exports = nextConfig
