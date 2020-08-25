import React, { useState, useEffect } from 'react';

const searchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');

  return (
    <div className='search-params'>
      <h1>{location}</h1>
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
          animal
          <select
            name='animal'
            id='animal'
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option value=''>All</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;