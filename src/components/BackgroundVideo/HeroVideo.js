import React, { Component } from 'react';

import * as styles from './HeroVideo.module.scss';

const HeroVideo = ({ title, videoUrl }) => (
  <div className={styles.heroVideo}>
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.videoWrapperIframe}
        src={videoUrl}
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
      />
    </div>
  </div>

);

export default HeroVideo;
