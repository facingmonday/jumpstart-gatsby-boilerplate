import React from 'react';
import classnames from 'classnames';

import * as styles from './Menu.module.scss';

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open ? this.props.open : false,
    }
  }
    
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  render(){
    return(
      <div className={styles.menu__container}>
        {
          (this.state.open)
          ? (
            <div className={classnames(styles.menuList, { height: (this.state.open) ? '100%' : 0})}>
              {this.props.children}
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Menu;