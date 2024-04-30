import './index.css';
import { configure } from '@modern-js/runtime/bff';
import { useEffect, useState } from 'react';
import hello, { postHello } from '@api/index';

configure({
  interceptor(request) {
    return async (url, params) => {
      const res = await request(url, params);
      return res.json();
    };
  },
});

const Page = () => {
  const [message, setMessage] = useState('bff-express');
  useEffect(() => {
    const fetchData = async () => {
      const res = await hello();
      setMessage(res.message);
    };

    fetchData();
    postHello({
      params: {
        id: '1111',
      },
      query: {
        user: 'modern@email.com',
      },
      data: {
        message: '3333',
      },
      headers: {
        'x-header': '3333',
      },
    });
  });
  return <div className="hello">{message}</div>;
};

export default Page;
