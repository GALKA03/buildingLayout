import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    sass(),
    // ...other plugins
  ],
  base: '/buildingLayout/vite-project/', // Adjust this path as needed
});