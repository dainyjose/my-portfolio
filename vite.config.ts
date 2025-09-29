// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamic base
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? "/my-portfolio/" : "/",
});
