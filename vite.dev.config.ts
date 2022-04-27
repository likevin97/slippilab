import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('.cert/localhost.key.pem'),
      cert: fs.readFileSync('.cert/localhost.crt.pem'),
    },
  },
  assetsInclude: /.*\/animations\/zips\/.*\.zip/,
  cacheDir: '.vite',
});
