import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import viteLogo from '../../static/images/vite.svg';
import reactLogo from '../../static/images/react.svg';

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p className="read-the-docs">
        <Link to="/posts">Статьи</Link>
      </p>
    </>
  );
};

export default HomePage;
