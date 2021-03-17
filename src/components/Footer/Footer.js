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
          <a className={styles.footer__link} href={'consulting'}>
            Consulting
          </a>
          <a className={styles.footer__link} href={'photo'}>
            Photography
          </a>
          <a className={styles.footer__link} href={'video'}>
            Video
          </a>
          <a className={styles.footer__link} href={'web'}>
            Web
          </a>
          <a className={styles.footer__link} href={'apps'}>
            Apps
          </a>
        </div>
        <div className={styles.footer__column}>
          <a className={styles.footer__link} href={'shop'}>
            Shop
          </a>
          <a className={styles.footer__link} href={'about'}>
            About Us
          </a>
          <a className={styles.footer__link} href={'faq'}>
            FAQ
          </a>
          <a className={styles.footer__link} href={'contact'}>
            Contact
          </a>
        </div>
        <div className={styles.footer__column}>
          <div className={styles.footer__address}>
              <p>1234 Dietz Ave.</p>
              <p>Akron, OH 44203</p>
            </div>
        </div>
        <div className={styles.footer__column}>
          {/* <GoogleMap
            width={'250'}
            height={'250'}
            source={'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu_Ow6YHTMIgRAbFqlGJn2mQ&key=AIzaSyA9TALVNowW_loCDV5GsjwcmkS3fLb4kSc'}
            allowFullScreen={false}
          /> */}
        </div>
      </div>
    )
  }
}

export default Footer;
