import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://arnolds-science-desk.netlify.app',
  output: 'server',
  adapter: netlify(),
});
