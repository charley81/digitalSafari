import React, { useEffect } from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import client from './ApiData';

console.log(client);

export default function App() {
  return (
    <div>
      <header>
        <h1 className='logo'>
          digital<span>Safari</span>{' '}
        </h1>
      </header>
      <SearchParams />
    </div>
  );
}

render(React.createElement(App), document.getElementById('root'));
