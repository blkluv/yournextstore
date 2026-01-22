// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: false, // Keep disabled for stability
	cacheComponents: true, // ENABLE THIS for "use cache" to work
	experimental: {
		typedEnv: true,
	},
	images: {
		remotePatterns: [{ 
			protocol: "https", 
			hostname: "*.blob.vercel-storage.com" 
		}],
	},
};

export default nextConfig;
