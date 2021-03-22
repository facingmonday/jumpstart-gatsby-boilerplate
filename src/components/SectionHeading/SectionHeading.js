import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import * as styles from './SectionHeading.module.scss';

class SectionHeading extends Component {
  constructor(props) {
    super(props);
    
  }
  static defaultProps = {
    title: '',
    subtitle: '',
    cta: {},
  }
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.object,
  }

  render() {
    const { title, subtitle, cta } = this.props;
    return (
      <div className={styles.sectionHeading__container}>
        <div className={styles.sectionHeading__title_container}>                
          <h2 className={styles.sectionHeading__title}>{title}</h2>
          <h4 className={styles.sectionHeading__subtitle}>{subtitle}</h4>
        </div>
        {
            (Object.keys(cta).length)
            ? <div className={styles.sectionHeading__cta_container}>
              <Button href={cta.href} label={cta.label} />
            </div>
            : null
          }
      </div>
    );
  }
}

export default SectionHeading;