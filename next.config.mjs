/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/api/todo", destination: "http://localhost:3000/api/todo" },
    ];
  },
};

export default nextConfig;
