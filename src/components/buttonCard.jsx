import React from 'react';
import clsx from 'clsx';
import { withStyles, ButtonBase, Paper, Box, Typography, makeStyles } from '@material-ui/core';

const StyledPaper = withStyles(theme => ({
  root: {
    maxWidth: 224,
    height: 271,
    borderRadius: 10,
    overflow: 'hidden',
  },
}))(Paper);

const StyledButtonBase = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 0,
    height: '100%',
    color: '#5a5d6d',
  },
}))(ButtonBase);

const ImageWrapper = withStyles(theme => ({
  root: {
    height: 165,
    width: '99%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
}))(Box);

const useStyles = makeStyles(theme => ({
  active: {
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function ButtonCard(props) {
  const { children, active } = props;
  const classes = useStyles();
  return (
    <StyledPaper elevation={3}>
      <StyledButtonBase className={clsx(active && classes.active)}>
        <ImageWrapper>{children[0]}</ImageWrapper>
        <Box padding={2}>
          <Typography component="div" gutterBottom>
            <Box fontSize={14} fontWeight={500}>
              {children[1]}
            </Box>
          </Typography>
          <Typography component="div">
            <Box fontSize={12} fontWeight={400}>
              {children[2]}
            </Box>
          </Typography>
        </Box>
      </StyledButtonBase>
    </StyledPaper>
  );
}
