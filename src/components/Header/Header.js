import React, { Component } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { Menu, MenuItem, MenuButton } from '../Menu';
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
    this.setState({ menuOpen: false });
    window.location.pathname = val.href;
  }

  render() {
    const menu = [
      {
        label: 'Work',
        icon: '',
        href: '/work',
      },
      {
        label: 'Blog',
        icon: '',
        href: '/blogs',
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
        <div className={styles.header__container} {...(this.props.headerColor ? { style: { backgroundColor: this.props.headerColor } } : {})}>
          <div className={styles.header__logo}>
            <Link to="/">
              <StaticImage
                src="../../assets/images/logos/logo.png"
                width="1204"
                height="200"
              />
            </Link>
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
