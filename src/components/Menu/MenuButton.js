import React from 'react';
import classnames from 'classnames';
import * as styles from './MenuButton.module.scss';

class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
  this.setState({open:!this.state.open});
  }
  
  render(){
    const styles = {
           
    }
    return(
      <div className={styles.menuButton} 
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div className={classnames(styles.menuButton__line, (this.state.open) ? styles.menuButton__lineTopOpen : styles.menuButton__lineTop )}/>
        <div className={classnames(styles.menuButton__line, (this.state.open) ? styles.menuButton__lineMiddleOpen : styles.menuButton__lineMiddle )}/>
        <div className={classnames(styles.menuButton__line, (this.state.open) ? styles.menuButton__lineBottomOpen : styles.menuButton__lineBottom )}/>
      </div>
    )
  }
}

export default MenuButton;