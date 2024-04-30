import { appTools, defineConfig } from '@modern-js/app-tools';
import { bffPlugin } from '@modern-js/plugin-bff';
import { expressPlugin } from '@modern-js/plugin-express';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
    bffPlugin(),
    expressPlugin(),
  ],
  server: {
    ssr: {
      mode: 'stream',
    },
    ssrByEntries: {
      one: false,
      two: false,
      four: false,
    },
  },
});
