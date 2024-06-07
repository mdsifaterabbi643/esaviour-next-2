/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //   {
      //     protocol: "https",
      //     hostname: "images.pexels.com",
      //   },
      //   {
      //     protocol: "https",
      //     hostname: "daisyui.com",
      //   },
      //   {
      //     protocol: "https",
      //     hostname: "drive.google.com"
      //   }
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
