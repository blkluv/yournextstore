// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	// Temporarily disable experimental features for stable build
	reactCompiler: false, // Disable for now
	cacheComponents: false, // Disable for now
	
	// Keep only essential configuration
	images: {
		remotePatterns: [
			{ 
				protocol: "https", 
				hostname: "*.blob.vercel-storage.com" 
			}
		],
	},
	
	// Add these for stability
	typescript: {
		ignoreBuildErrors: false, // Set to true if TypeScript errors persist
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	staticPageGenerationTimeout: 120,
};

export default nextConfig;
