import React, { cloneElement, Children, Component } from 'react';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';

import * as styles from './BlockSet.module.scss';

class BlockSet extends Component {
  render() {
    const { children, style, ...rest } = this.props;
    return (
      <Grid container className={classnames(styles.blockSet, style)}>
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
    );
  }
}

export default BlockSet;
