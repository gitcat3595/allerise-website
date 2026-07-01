import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://allerise.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
