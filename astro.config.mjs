// Astro-Config-Datei
import { defineConfig } from "astro/config";

// Tailwind CSS importieren
import tailwind from "@astrojs/tailwind";

// Astro-Plugins importieren
// Image-Plugin für responsive Images
import image from "@astrojs/image";
// MDX-Plugin für Markdown + JSX
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Markdown-Plugin konfigurieren
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  // Astro-Plugins registrieren
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
