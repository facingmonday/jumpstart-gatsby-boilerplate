import React from 'react';

import * as styles from './NavigationLink.module.scss';

export default ({href, label}) => (
  <div className={styles.navLink}>
    <a href={href}>
      {label}
    </a>
  </div>
);
