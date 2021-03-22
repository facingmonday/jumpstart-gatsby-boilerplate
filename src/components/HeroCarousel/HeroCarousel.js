import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as styles from './HeroCarousel.module.scss';

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
    console.log('images', images);
    return (
      <div className={styles.heroCarousel}>
        {
          images.map((image, i) => <div key={i} style={{ 'backgroundImage': `url(${image.publicURL})`}} className={classnames(styles.heroCarousel__image, imageStyles)} />)
        }
      </div>
    );
  }
}

export default HeroCarousel;