import React from 'react';
import * as styles from './Button.module.scss';

const Button = ({children}) => (
  <div className={styles.buttonContainer}>
    {children}
  </div>
)

export default Button;