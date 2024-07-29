import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			name: "copy-404",
			apply: "build",
			buildEnd() {
				// 빌드 후 404.html 파일을 dist 폴더로 복사
				const src = resolve(__dirname, "404.html");
				const dest = resolve(__dirname, "dist/404.html");
				copyFileSync(src, dest);
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
