import React, { Component } from 'react';
import s from './Atom.module.scss';

import Icon from '../icon';

class Atom extends Component {
  render() {
    const { icon, label } = this.props;
    console.log('icon', icon);
    return (
      <div className={s.atom__container}>
        <div className={s.atom__icon}>
          <Icon id={icon} />
        </div>
        <div className={s.atom__label}>{label}</div>
      </div>
    );
  }
}

export default Atom;