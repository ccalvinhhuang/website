/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("bruh");
    return [
      {
        source: "/projectspage",
        destination: "/src/app/page.js",
      },
    ];
  },
};

module.exports = nextConfig;
