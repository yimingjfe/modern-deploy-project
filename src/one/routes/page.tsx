import './index.css';
import { useState } from 'react';

const Page = () => {
  const [message] = useState('bff-express');
  return <div className="hello">{message}</div>;
};

export default Page;
