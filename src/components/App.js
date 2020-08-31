import React from 'react';
import Header from './Header';
import Details from './Details';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';

export default function App() {
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </React.StrictMode>
  );
}

render(React.createElement(App), document.getElementById('root'));
