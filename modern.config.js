import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  output: {
    favicon: './src/pages/images/logoIcon.jpeg',
  },
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
