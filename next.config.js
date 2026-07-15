/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'img.pokemondb.net',
            },
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            }
        ],
    },
}

module.exports = nextConfig
