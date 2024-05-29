import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	const API_URL = `${env.VITE_BE_API_URL || "http://localhost:3000"}`;
	const PORT = `${env.VITE_PORT || "5173"}`;

	return {
		server: {
			proxy: {
				"/api": {
					target: API_URL,
					changeOrigin: true,
					secure: false,
				},
			},
		},
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: "./src/setupTests.js",
			reporters: ["default", "junit"],
			outputFile: "test-results.xml",
		},
		plugins: [react()],
	};
});
