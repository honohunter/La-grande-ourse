import React from 'react';
import { withStyles, Tooltip, Box } from '@material-ui/core';

const StyledToolTip = withStyles(theme => ({
  tooltip: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    color: theme.palette.primary.main,
  },
  arrow: {
    color: '#ffffff',
    '&::before': {
      boxShadow: theme.shadows[3],
    },
  },
}))(Tooltip);

export default function CustomTooltip(props) {
  const { children } = props;
  return (
    <StyledToolTip arrow enterDelay={500} leaveDelay={200} {...props}>
      <div style={{ cursor: 'pointer' }}>{children}</div>
    </StyledToolTip>
  );
}
