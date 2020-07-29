import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Hidden, Container, Grid } from '@material-ui/core';

import ImageLoader from '../components/imagesLoader';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
  },
  backgroundImage: {
    maxWidth: 333,
    bottom: 110,
  },
}));

export default function SectionA() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Hidden smDown>
        <div>
          <ImageLoader imageName="sectionB" className={classes.backgroundImage} />
        </div>
      </Hidden>
      <Container className={classes.container}>
        <Grid container alignItems="center" justify="center" className={classes.grid}></Grid>
      </Container>
    </section>
  );
}
