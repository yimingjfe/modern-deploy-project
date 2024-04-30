import type { LoaderFunction } from '@modern-js/runtime/router';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loader: LoaderFunction = async ({ request }) => {
  await wait(10);
  return {
    message: 'user',
  };
};

export default loader;
