import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  tools: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9088/',
          changeOrigin: true,
        },
      },
    },
  },
});
