/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles, Slider, Tooltip, Box } from '@material-ui/core';

const StyledSlider = withStyles(theme => ({
  root: {
    height: 14,
    [theme.breakpoints.only('xs')]: {
      height: 9,
    },
    display: 'flex',
    alignItems: 'center',
  },
  rail: {
    [theme.breakpoints.only('xs')]: {
      height: 9,
    },
    height: 14,
    borderRadius: 5.5,
    paddingRight: 20,
    marginLeft: -7,
    backgroundColor: 'transparent',
    border: '1px solid',
  },
  track: {
    [theme.breakpoints.only('xs')]: {
      height: 9,
    },
    height: 14,
    borderRadius: 5.5,
    marginLeft: -7,
    paddingRight: 7,
    border: '1px solid',
  },
  mark: {
    [theme.breakpoints.only('xs')]: {
      height: 4,
      width: 4,
    },
    height: 8,
    width: 8,
    borderRadius: '50%',
  },
  markActive: {
    opacity: 0.5,
  },

  thumb: {
    [theme.breakpoints.only('xs')]: {
      height: 28,
      width: 28,
      border: '5px solid white',
    },
    height: 37,
    width: 37,
    marginLeft: -13,
    border: '6px solid white',
    borderRadius: '50%',
    boxShadow: theme.shadows[3],
  },
}))(Slider);

const StyledTooltip = withStyles(theme => ({
  tooltip: {
    [theme.breakpoints.only('xs')]: {
      fontSize: 12,
    },
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: '#2e5bcc',
    borderRadius: 10,
    padding: theme.spacing(1, 2),
  },
  arrow: {
    color: '#2e5bcc',
  },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 4),
    height: 100,
    position: 'relative',
  },
  markLabel: {
    top: 50,
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.primary.main,
    position: 'absolute',
    width: '40%',
    // textAlign: 'center',
  },
  firstLabel: {
    left: 5,
    textAlign: 'left',
  },
  lastLabel: {
    right: 0,
    textAlign: 'right',
  },
}));

function valuetext(value, marks) {
  return marks.filter(ele => ele.value === value)[0].text;
}

const ValueLabelComponent = props => {
  const { children, open, value, marks } = props;

  return (
    <StyledTooltip open={open} enterTouchDelay={0} placement="bottom" title={valuetext(value, marks)} arrow>
      {children}
    </StyledTooltip>
  );
};

export default function SliderWrapper(props) {
  const { marks } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StyledSlider {...props} ValueLabelComponent={props => <ValueLabelComponent {...props} marks={marks} />} />
      <div className={clsx(classes.markLabel, classes.firstLabel)}>{marks[0].text}</div>
      <div className={clsx(classes.markLabel, classes.lastLabel)}>{marks[marks.length - 1].text}</div>
    </div>
  );
}
