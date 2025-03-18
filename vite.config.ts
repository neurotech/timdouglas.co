import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cv: resolve(__dirname, "cv/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
  server: {
    host: true,
  },
});
