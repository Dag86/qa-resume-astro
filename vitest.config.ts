import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: { provider: "v8", reporter: ["text", "html"] },

    // Only look at your tests:
    include: ["tests/**/*.{test,spec}.{ts,tsx,js}"],

    // Merge Vitest's defaults, then add our own
    exclude: [
      ...configDefaults.exclude,     // keeps node_modules, dist, etc. excluded
      "tests/e2e/**",                // don't let Vitest touch Playwright specs
      ".astro/**"                    // ignore Astro’s build cache
    ],
  },
});
