/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	// In dev the `development` export condition resolves these to their TS
	// `src`; Next must transpile them from node_modules (build uses `dist`).
	transpilePackages: ["@hoardodile/ui", "@hoardodile/i18n", "@hoardodile/sdk-types"],
	webpack(config) {
		// Workaround: webpack's WASM xxhash64 hash crashes on Node 24 with
		// "Cannot read properties of undefined (reading 'length')" for some
		// module inputs. Fall back to a JS hash so static export is stable.
		config.output.hashFunction = "sha256"
		return config
	},
}

export default nextConfig
