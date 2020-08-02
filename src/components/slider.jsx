import React from 'react';
import { withStyles, Slider, Tooltip, Box } from '@material-ui/core';

const StyledSlider = withStyles(theme => ({
  root: {
    height: 13,
  },
  rail: {
    height: 13,
    borderRadius: 5.5,
    paddingRight: 20,
    marginLeft: -7,
    backgroundColor: 'transparent',
    border: '1px solid',
  },
  track: {
    height: 13,
    borderRadius: 5.5,
    marginLeft: -7,
    paddingRight: 7,
    border: '1px solid',
  },
  mark: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    top: 16,
  },
  markActive: {
    opacity: 0.5,
  },
  markLabel: {
    top: 50,
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  thumb: {
    top: 6,
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
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: '#2e5bcc',
    borderRadius: 10,
    padding: theme.spacing(1, 3),
  },
  arrow: {
    color: '#2e5bcc',
  },
}))(Tooltip);

const StyledContainer = withStyles(theme => ({
  root: {
    padding: theme.spacing(0, 4),
    height: 100,
  },
}))(Box);

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
  return (
    <StyledContainer>
      <StyledSlider {...props} ValueLabelComponent={props => <ValueLabelComponent {...props} marks={marks} />} />
    </StyledContainer>
  );
}
