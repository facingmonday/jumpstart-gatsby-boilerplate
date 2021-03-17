import React, { Component } from 'react';
import s from './Avatar.module.scss';

class Avatar extends Component {
  render() {
    return (
      <div className={s.avatar__container}>
        <img className={s.avatar__image} src={this.props.imageUrl} alt={this.props.alt} />
      </div>
    );
  }
}

export default Avatar;