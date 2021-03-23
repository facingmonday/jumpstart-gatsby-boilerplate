import React, { Component } from 'react';

import YoutubeBackground from 'react-youtube-background';
import * as styles from './HeroVideo.module.scss';

const HeroVideo = ({ title, videoId }) => (
  <div className={styles.heroVideo}>
    <div className={styles.videoWrapper}>
      <YoutubeBackground
        videoId="X7VMtUum7wY"
        className={styles.videoWrapper}
      />
    </div>
  </div>
);

export default HeroVideo;
