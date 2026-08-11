import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()]
});
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});