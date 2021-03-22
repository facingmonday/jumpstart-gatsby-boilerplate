import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UIProvider } from '../../context/ui';

import Header from '../Header';
import Footer from '../Footer';

import * as styles from './Page.module.scss';

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  componentDidMount() {
    document.querySelector('html').classList.remove('no-js');
  }

  render() {
    const { children, headerColor } = this.props;
    return (
      <UIProvider>
        <div className={styles.main__container}>
          <Header headerColor={headerColor}/>
          <div className={styles.main__body}>
            { children }
          </div>
          <div className={styles.main__footer}>
            <Footer />
          </div>
        </div>
      </UIProvider>
    );
  }
}


// const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)