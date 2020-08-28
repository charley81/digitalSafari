import React from 'react';

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = 'http://placecorgi.com/300/300';
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a className='pet-card' href={`/details/${id}`}>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h2>{name}</h2>
        <h3>{`${animal} - ${breed} - ${location}`}</h3>
      </div>
    </a>
  );
}
