import React, { Component } from 'react';
import { Menu, MenuItem, MenuButton } from '../menu';
import Image from '../Image';
import NavigationLink from '../NavigationLink';
import * as styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick(val) {
    console.log('val', val);
    this.setState({menuOpen: false});
    window.location.pathname = val.href;
  }

  render() {
    const menu = [
      {
        label: 'Consulting',
        icon: '',
        href: '/consulting'
      },
      {
        label: 'Photos',
        icon: '',
        href: '/photos'
      },
      {
        label: 'Video',
        icon: '',
        href: '/video'
      },
      {
        label: 'Web',
        icon: '',
        href: '/web'
      },
      {
        label: 'Shop',
        icon: '',
        href: '/shop'
      },
      {
        label: 'Contact Us',
        icon: '',
        href: '/contact'
      },
    ];
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>this.handleLinkClick(val)}>{val.label}</MenuItem>)
    });
    return(
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Image className={styles.header__thumbnail} src={require('../../assets/images/logos/logo.png')} /> 
          </div>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
          <div className={styles.header__navigation}>  
            {
              menu.map((val, index) => <NavigationLink key={index} href={val.href} label={val.label} />)
            }
          </div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </div>
    )
  }
}

export default Header;
