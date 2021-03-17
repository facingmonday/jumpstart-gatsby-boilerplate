import React from 'react';

import * as styles from './MenuItem.module.scss';

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false,
    }
  }
  
  handleHover(){
    this.setState({hover:!this.state.hover});
  }
  
  render(){
    return(
      <div className={styles.menuItem__container}>
        <div 
          className={styles.menuItem__menuItem} 
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
        >
          {this.props.children}  
        </div>
      <div className={styles.menuItem__line}/>
    </div>  
    )
  }
}

MenuItem.defaultProps = {
  delay: 0,
}
export default MenuItem;
