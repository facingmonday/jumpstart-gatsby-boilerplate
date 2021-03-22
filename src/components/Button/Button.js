import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Button.module.scss';

const Button = ({ children, ...restProps }) => (
  <Link
    className={styles.buttonContainer}
    {...restProps}
  >
    <span className={styles.buttonText}>
      { children }
    </span>
  </Link>
);

export default Button;
