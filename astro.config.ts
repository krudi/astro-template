import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: process.env.ASTRO_URL,
    output: 'server',
    integrations: [sitemap()],
    adapter: node({
        mode: 'standalone'
    })
});
