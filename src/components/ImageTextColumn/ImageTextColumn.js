import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from '../image';
import { navigate } from "gatsby";
import Button from '../button'

import * from styles from './ImageTextColumn.modules.scss';

class ImageTextColumn extends Component {
  static propTypes = {
    heading: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.any,
  }
  render() {
    const { image, body, heading, cta, right } = this.props;
    const classes = [
      styles.imageTextColumn,
      right && styles.imageTextColumn__right
    ];

    return (
      <div className={classnames(classes)}>
        <div className={styles.imageTextColumn__imageContainer}>
          <Image style={{ flex: 1, width: '100%' }} src={image} />
        </div>
        <div className={styles.imageTextColumn__textContainer}>
          <h2>{heading}</h2>
          <p>{body}</p>
          {
            cta && 
            <div>
              <Button onClick={() => navigate(cta.href)} label={cta.label} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ImageTextColumn;
