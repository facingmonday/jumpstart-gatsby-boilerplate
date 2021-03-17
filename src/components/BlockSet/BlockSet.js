import React, { cloneElement, Children, Component } from 'react';
import Grid from '@material-ui/core/Grid';

import s from './BlockSet.module.scss';

class BlockSet extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Grid container className={s.blockSet}>
        {
          Children.map(children, (child, i) => (
            <Grid item {...rest}>
              {
                cloneElement(child)
              }
            </Grid>
          ))
        }
      </Grid>
    )
  }
}

export default BlockSet;
