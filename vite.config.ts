// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Build the Vite config asynchronously
const configPromise = (async () => {
  const plugins: any[] = [react(), tailwindcss()];

  // Try loading Replit plugins — ignore if missing (Vercel builds)
  try {
    const runtime = await import("@replit/vite-plugin-runtime-error-modal");
    if (runtime?.default) plugins.push(runtime.default());
  } catch (_) { /* ignore */ }

  try {
    const carto = await import("@replit/vite-plugin-cartographer");
    if (carto?.cartographer) plugins.push(carto.cartographer());
  } catch (_) { /* ignore */ }

  try {
    const banner = await import("@replit/vite-plugin-dev-banner");
    if (banner?.devBanner) plugins.push(banner.devBanner());
  } catch (_) { /* ignore */ }

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

// Export config (non-async wrapper to prevent TS overload error)
export default defineConfig(() => configPromise as unknown as any);
