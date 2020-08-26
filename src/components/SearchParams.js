import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor='animal'>
          Pets
          <select name='animal' id='animal'>
            <option value=''>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
