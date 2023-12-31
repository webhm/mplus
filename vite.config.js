import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://api.metroplus.test:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  preview: {
    https: true

  },
  base: '/',
  // Uncomment to use JSX:
  // esbuild: {
  //   jsx: "transform",
  //   jsxFactory: "m",
  //   jsxFragment: "'['",
  // },
});