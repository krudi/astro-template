import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.ASTRO_URL,
  output: "server",
  integrations: [sitemap()],
});
