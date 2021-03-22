import React from 'react';
import classnames from 'classnames';

import * as styles from './Section.module.scss';

const Section = ({ children, containerStyle }) => {
  const classes = [
    styles.section,
  ];
  return (
    <div
      className={classnames(styles.section, containerStyle)}
      {...(containerStyle ? { style: containerStyle } : {})}
    >
      { children }
    </div>
  );
};

export default Section;
