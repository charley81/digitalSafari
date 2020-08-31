import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className='carousel'>
        <img src={photos[active]} alt='your next pet' />
        <div className='carousel-smaller'>
          {photos.map((photo, i) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt='your next pet'
              onClick={this.handleIndexClick}
              data-index={i}
              className={i === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
