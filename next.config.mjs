/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/portfolio",
  images: {
    loader: "default",
    path: "/portfolio", // Base path for images (public folder in GitHub Pages)
  },
  output: "export",
  reactStrictMode: true,
};
export default nextConfig;
