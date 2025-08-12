// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://tfletch.tech",
    devToolbar: {
        enabled: false,
    },
    scopedStyleStrategy: "where",
    server: {
        allowedHosts: ["sudowoodo"],
    },
});
