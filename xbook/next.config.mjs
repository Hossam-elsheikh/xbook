/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              hostname: '**', // Matches any hostname
            },
          ],
    }
};

export default nextConfig;
