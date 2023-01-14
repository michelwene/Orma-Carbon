/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/deputados",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
