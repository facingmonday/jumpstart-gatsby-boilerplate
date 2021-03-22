import React, { Component } from 'react';

import * as styles from './HeroImage.module.scss';

const HeroImage = ({
  image,
  subTitle,
  superTitle,
  title,
}) => (
  <div
    style={{
      backgroundImage: `url(${image.src})`, backgroundSize: 'cover', height: '60vh', display: 'flex', justifyContent: 'center', padding: '0 140px', flexDirection: 'column',
    }}
  >
    {superTitle && <h4 className={styles.superTitle}>{superTitle}</h4>}
    {title && <h1 className={styles.title}>{title}</h1>}
    {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
  </div>
);

export default HeroImage;
