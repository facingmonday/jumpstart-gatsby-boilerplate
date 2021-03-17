/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

const UIContext = React.createContext();

export class UIProvider extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    // check isMobile on mount
    this.onResize();
    window.addEventListener('resize', debounce(this.onResize, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  // loading sceen homepage
  setLoadingScreenComplete = () => {
    this.setState({
      loadingScreenComplete: true,
    });
  }

  onResize = () => {
    // update mobile / desktop mq check
    const isMobile = !window.matchMedia('(min-width: 1080px)').matches;

    this.setState({
      isMobile,
    });
  }

  toggleMobileNav = () => {
    // toggle mobile nav open / close
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  }

  setDesktopActiveNav = (i) => {
    // set index for relevant active dropdown menu
    this.setState({
      desktopActiveNav: i,
    });
  }

  closeNav = () => {
    // close both desktop and mobile navs, for use on route change
    this.setState({
      desktopActiveNav: -1,
      mobileNavOpen: false,
    });
  }

  setNavTheme = (theme) => {
    this.setState({
      navTheme: theme,
    });
  }

  state = {
    navTheme: 'dark',
    mobileNavOpen: false,
    desktopNavOpen: false,
    desktopActiveNav: -1,
    isMobile: true,
    loadingScreenComplete: false,

    setNavTheme: this.setNavTheme,
    toggleMobileNav: this.toggleMobileNav,
    setDesktopActiveNav: this.setDesktopActiveNav,
    closeNav: this.closeNav,
    setLoadingScreenComplete: this.setLoadingScreenComplete,
  }

  render() {
    const { children } = this.props;

    return (
      <UIContext.Provider value={this.state}>
        {children}
      </UIContext.Provider>
    );
  }
}

export const withUIContext = Component =>
  props => (
    <UIContext.Consumer>
      {context => <Component {...props} ui={context} />}
    </UIContext.Consumer>
  );

export default UIContext;
