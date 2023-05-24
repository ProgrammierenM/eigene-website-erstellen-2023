import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
    mdx(),
  ],
});
