import React, { useState } from 'react';
import { withStyles, Tooltip, ButtonBase, ClickAwayListener } from '@material-ui/core';

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
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <StyledToolTip
        arrow
        enterDelay={500}
        leaveDelay={200}
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        {...props}
      >
        <div style={{ cursor: 'pointer' }}>
          <ButtonBase onClick={handleTooltipOpen}>{children}</ButtonBase>
        </div>
      </StyledToolTip>
    </ClickAwayListener>
  );
}
