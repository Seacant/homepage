// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tfletch.tech",
  devToolbar: {
    enabled: false,
  },
  // TODO: fix whitespace to embrace the new default
  compressHTML: true,
  scopedStyleStrategy: "where",
  server: {
    allowedHosts: ["sudowoodo"],
  },
});
