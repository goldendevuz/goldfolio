// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gold.mohir.cloud",
  integrations: [mdx(), sitemap()],

  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
