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
  server: {
    ssr: false,
  },
});
