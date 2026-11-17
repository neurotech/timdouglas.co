import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const path = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(path, "index.html"),
        cv: resolve(path, "cv/index.html"),
        contact: resolve(path, "contact/index.html"),
      },
    },
  },
  server: {
    host: true,
  },
});
