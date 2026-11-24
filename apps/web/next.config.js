/** @type {import('next').NextConfig} */
const nextConfig = {
  // @repo/ui отдаётся как исходники TS, Next должен их собрать сам.
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
