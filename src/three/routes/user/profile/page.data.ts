import { defer } from '@modern-js/runtime/router';

export const loader = () => {
  const user = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: `user`,
        age: 18,
      });
    }, 4000);
  });

  return defer({ data: user });
};
