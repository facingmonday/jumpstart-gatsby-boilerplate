import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './HeroCarousel.module.scss';

class HeroCarousel extends Component {
  state = {}

  static defaultProps = {
    images: [],
    imageStyles: {}
  }
  
  static propTypes = {
    images: PropTypes.array,
    imageStyles: PropTypes.shape,
  }

  render() {
    const { images, imageStyles } = this.props;
    return (
      <div className={s.heroCarousel}>
        {
          images.map((image, i) => <div key={i} style={{ 'backgroundImage': `url(${image})`}} className={s(s.heroCarousel__image, imageStyles)} />)
        }
      </div>
    );
  }
}

export default HeroCarousel;