import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import * as styles from './IconBlock.module.scss';
import { Link } from 'gatsby';

class IconBlock extends Component {
  state = {}

  static propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    description: '',
  }

  render() {
    const { iconName, href, title, description } = this.props;
    return (
      <Link to={href} style={{ textDecoration: 'none', color: 'black'}}>
        <div className={styles.iconBlock}>
          <div className={styles.iconBlock__icon}>
            {
              Boolean(iconName) &&
              Icon[iconName.slice(0,1).toUpperCase() + iconName.slice(1)] &&
              React.createElement(Icon[iconName.slice(0,1).toUpperCase() + iconName.slice(1)], {
                size: '2em'
            })}
          </div>                        
          <h3 className={styles.iconBlock__title}>{title}</h3>
          <p className={styles.iconBlock__description}>{description}</p>                
        </div>
      </Link>
    );
  }
}

export default IconBlock;
