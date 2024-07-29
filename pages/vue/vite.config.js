import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "path";
import { copyFileSync } from "fs";

// __dirname을 정의합니다.
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			name: "copy-404",
			apply: "build",
			closeBundle() {
				try {
					// 404.html 파일을 루트 디렉토리에서 pages/blog 디렉토리로 복사합니다.
					const src = resolve(__dirname, "404.html");
					const dest = resolve(__dirname, "pages/blog/404.html");
					copyFileSync(src, dest);
					console.log("404.html copied to pages/blog directory");
				} catch (error) {
					console.error("Error copying 404.html:", error);
				}
			},
		},
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	base: process.env.NODE_ENV === "production" ? "/pages/blog/" : "/",
});
