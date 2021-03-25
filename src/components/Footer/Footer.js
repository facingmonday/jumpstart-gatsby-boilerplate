import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Footer.module.scss';

class Footer extends Component {

  state = {}

  static propTypes = {
    leftHeading: PropTypes.string,
    leftText: PropTypes.string,
    rightHeading: PropTypes.string,
    rightText: PropTypes.string,
    links: PropTypes.array,
    subLinks: PropTypes.array,
    socialLinks: PropTypes.array
  }

  static defaultProps = {
    leftHeading: '',
    leftText: '',
    rightHeading: '',
    rightText: '',
    links: [],
    subLinks: [],
    socialLinks: []
  }

  render() {
    const date = new Date();
    return (
      <div className={styles.footer}>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__h4}>Who I Am</h4>
          <h1 className={styles.footer__h1}>Creative Jay LLC</h1>
          <p className={styles.footer__p}>I'm a full stack developer, videographer, photographer, graphic designer, printer, musician and friend.</p>
        </div>
        <div className={styles.footer__column}>
          <a className={styles.footer__link} href={'/work/apps'}>
            Apps
          </a>
          <a className={styles.footer__link} href={'/work/graphicdesign'}>
            Graphic Design
          </a>
          <a className={styles.footer__link} href={'/work/photography'}>
            Photography
          </a>
          <a className={styles.footer__link} href={'/work/video'}>
            Video
          </a>
          <a className={styles.footer__link} href={'/work/web'}>
            Web
          </a>
        </div>
        <div className={styles.footer__column}>

         <a className={styles.footer__link} href={'about'}>
            About Us
          </a>
          <a className={styles.footer__link} href={'faq'}>
            FAQ
          </a>
          <a className={styles.footer__link} href={'contact'}>
            Contact
          </a>
          <div className={styles.footer__address}>
              <p>1234 Dietz Ave.</p>
              <p>Akron, OH 44203</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer;
