import React, { Component } from 'react';

import * from styles from './HorizontalScroller.module.scss';

const HorizontalScroller = ({ children }) => (
  <div className={styles.horizontalScroller__container}>
    {
      Children.map(children, (child, i) => (
        <div className={styles.horizontalScroller__child}>
          {
            cloneElement(child)
          }
        </div>
      ))
    }
  </div>
)

export default HorizontalScroller;
