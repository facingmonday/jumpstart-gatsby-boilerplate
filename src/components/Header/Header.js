import React, { Component } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Menu, MenuItem, MenuButton } from '../menu';
import Image from '../Image';
import NavigationLink from '../NavigationLink';
import * as styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick(val) {
    console.log('val', val);
    this.setState({ menuOpen: false });
    window.location.pathname = val.href;
  }

  render() {
    const menu = [
      {
        label: 'Services',
        icon: '',
        href: '/services',
      },
      {
        label: 'Work',
        icon: '',
        href: '/work',
      },
      {
        label: 'Blog',
        icon: '',
        href: '/blog',
      },
      {
        label: 'Contact',
        icon: '',
        href: '/contact',
      },
    ];
    const menuItems = menu.map((val, index) => (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={() => this.handleLinkClick(val)}
      >
        {val.label}
      </MenuItem>
    ));
    return (
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <StaticImage
              src="../../assets/images/logos/logo.png"

            />
          </div>
          <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color="white" />
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
    );
  }
}

export default Header;
