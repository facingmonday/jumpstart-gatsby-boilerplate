import React, { Component } from 'react';

import * as styles from './HeroVideo.module.scss';

const HeroVideo = ({ videoUrl }) => (
  <div className={styles.heroVideo}>
    <iframe src={videoUrl} width="100%" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
);

export default HeroVideo;