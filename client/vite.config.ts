import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// import handlebars from 'vite-plugin-handlebars';
// import raw from 'vite-plugin-raw';
// import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    eslint()
  //   handlebars({
  //     partialDirectory: path.resolve(__dirname, 'src/templates'),
  //   }),
  //   raw({
  //     fileRegex: /\.hbs$/
  //   })
  ],
  server: {
    port: 3000,
  },
});

// npm install eslint-config-react-app --save-dev
