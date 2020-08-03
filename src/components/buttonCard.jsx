import React from 'react';
import clsx from 'clsx';
import { withStyles, ButtonBase, Paper, Box, Typography, makeStyles } from '@material-ui/core';

const StyledPaper = withStyles(theme => ({
  root: {
    [theme.breakpoints.only('md')]: {
      //   width: 170,
      //   height: 271,
    },
    [theme.breakpoints.only('sm')]: {
      //   width: 130,
      //   height: 271,
    },
    [theme.breakpoints.only('xs')]: {
      //   width: 90,
      //   height: "unset",
    },
    maxWidth: 224,
    height: 271,
    borderRadius: 12,
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
    width: '100%',
    color: '#5a5d6d',
  },
}))(ButtonBase);

const ImageWrapper = withStyles(theme => ({
  root: {
    height: 150,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: theme.spacing(2, 0),
  },
}))(Box);

const useStyles = makeStyles(theme => ({
  active: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  activeButton: {
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    [theme.breakpoints.only('xs')]: {
      fontSize: 11,
    },
  },
  subtext: {
    fontSize: 12,
    fontWeight: 400,
    [theme.breakpoints.only('xs')]: {
      fontSize: 11,
    },
  },
  textSection: {
    margin: 'auto 10px',
  },
}));

export default function ButtonCard(props) {
  const { children, active } = props;
  const classes = useStyles();
  return (
    <StyledPaper className={clsx(active && classes.active)} elevation={3}>
      <StyledButtonBase className={clsx(active && classes.activeButton)}>
        <ImageWrapper>{children[0]}</ImageWrapper>
        <div className={classes.textSection}>
          <Typography component="div" gutterBottom className={classes.text}>
            <div>{children[1]}</div>
          </Typography>
          <Typography component="div">
            <div className={classes.subtext}>{children[2]}</div>
          </Typography>
        </div>
      </StyledButtonBase>
    </StyledPaper>
  );
}
