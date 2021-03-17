import React from 'react';
import classnames from 'classnames';

import * as styles from './Section.module.scss';

const Section = ({ children, flexDirection }) => {
  const classes = [
    styles.section,
    flexDirection && styles.column
  ]
  return (
    <div className={classnames(classes)}>
      { children }
    </div>
  );
}

export default Section;