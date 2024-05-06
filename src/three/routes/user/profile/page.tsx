import { Outlet, useLoaderData, Await } from '@modern-js/runtime/router';
import { Suspense } from 'react';

export default function Page() {
  const data = useLoaderData() as {
    data: Promise<string>;
  };
  return (
    <div className="user-profile">
      <Suspense fallback={<div id="loading">loading user data ...</div>}>
        <Await resolve={data.data}>
          {user => {
            return (
              <div id="data">
                name: {user.name}, age: {user.age}
              </div>
            );
          }}
        </Await>
        <Outlet />
      </Suspense>
    </div>
  );
}
