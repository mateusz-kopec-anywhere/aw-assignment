/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		externalDir: true,
	},
	compiler: {
		emotion: true,
	},
	reactStrictMode: false,
	swcMinify: true,
};

export default nextConfig;
