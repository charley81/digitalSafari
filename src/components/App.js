import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

export default function App() {
  return (
    <div>
      <header>
        <h1 className='logo'>
          digital<span>Safari</span>{' '}
        </h1>
        <p>
          This is a test site... Data is limited to Seattle, WA & San Francisco,
          CA
        </p>
      </header>
      <SearchParams />
    </div>
  );
}

render(React.createElement(App), document.getElementById('root'));
