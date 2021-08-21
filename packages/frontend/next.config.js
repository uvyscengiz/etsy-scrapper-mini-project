/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL,
        INTERNAL_API_URL: process.env.INTERNAL_API_URL,
    },
}
