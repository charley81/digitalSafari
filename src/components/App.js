import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

export default function App() {
  return (
    <div>
      <h1 id='logo'>digitalSafari</h1>
      <Pet name='Chance' animal='dog' breed='unknown' />
      <Pet name='Pepper' animal='bird' breed='Cardinal' />
      <Pet name='Cleo' animal='cat' breed='Calico' />
    </div>
  );
}

render(React.createElement(App), document.getElementById('root'));
