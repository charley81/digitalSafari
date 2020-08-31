import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1 className='logo'>
          digital<span>Safari</span>{' '}
        </h1>
      </Link>
      <p>
        This is a test site... Data is limited to Seattle, WA & San Francisco,
        CA
      </p>
    </header>
  );
};

export default Header;
