import React from 'react';
import { withStyles, Tooltip } from '@material-ui/core';

const StyledToolTip = withStyles(theme => ({
  tooltip: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: theme.spacing(1, 3),
  },
  arrow: {
    color: '#ffffff',
  },
}));

export default StyledToolTip(Tooltip);
