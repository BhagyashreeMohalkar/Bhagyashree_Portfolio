// global.d.ts
// Ambient module declarations for optional Replit Vite plugins (prevents editor errors)

declare module "@replit/vite-plugin-runtime-error-modal" {
  const plugin: any;
  export default plugin;
}

declare module "@replit/vite-plugin-cartographer" {
  export function cartographer(...args: any[]): any;
}

declare module "@replit/vite-plugin-dev-banner" {
  export function devBanner(...args: any[]): any;
}
