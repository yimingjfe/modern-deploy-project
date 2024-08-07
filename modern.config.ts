import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
  ],
  bff: {
    prefix: '/bff-api',
  },
  output: {
    disableMinimize: true,
  },
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
