import React from 'react';
import classnames from 'classnames';

import * as styles from './Image.module.scss';

const Image = ({ src, className, style, alt, ...rest }) => {
  console.log('style', style);
  return (
    <img
      className={classnames(styles.image, className)}
      src={src}
      alt={alt}
      {...rest}
    />
  );
}
export default Image;
