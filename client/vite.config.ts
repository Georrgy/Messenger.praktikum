import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from "vite-plugin-checker"
//npm install vite-plugin-stylelint -D


// import handlebars from 'vite-plugin-handlebars';
// import raw from 'vite-plugin-raw';
// import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint:{
        lintCommand: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
      },
      overlay: false,
      typescript:true,
      stylelint:{
        lintCommand: "stylelint \"**/*.scss\""
      }
    }),
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

