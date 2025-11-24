// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Build the Vite config asynchronously (so we can use await import())
const configPromise = (async () => {
  const plugins: any[] = [react(), tailwindcss()];

  // Try to load Replit-specific plugins only if available.
  // If they're not installed (e.g. on Vercel), these imports will fail and be ignored.
  try {
    const runtime = await import("@replit/vite-plugin-runtime-error-modal");
    if (runtime?.default) plugins.push(runtime.default());
  } catch (_) { /* ignore if not installed */ }

  try {
    const carto = await import("@replit/vite-plugin-cartographer");
    if (carto?.cartographer) plugins.push(carto.cartographer());
  } catch (_) { /* ignore if not installed */ }

  try {
    const banner = await import("@replit/vite-plugin-dev-banner");
    if (banner?.devBanner) plugins.push(banner.devBanner());
  } catch (_) { /* ignore if not installed */ }

  return {
    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    css: {
      postcss: { plugins: [] },
    },

    // project client root
    root: path.resolve(import.meta.dirname, "client"),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },

    server: {
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
})();

// Export a non-async wrapper that returns the Promise (cast to any to avoid TS overload complaints)
export default defineConfig(() => configPromise as unknown as any);
