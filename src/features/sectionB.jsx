import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Hidden, Container, Grid } from '@material-ui/core';

import ImageLoader from '../components/imagesLoader';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    height: 700,
    backgroundColor:"#f8f8f8"
  },
  backgroundImage: {
    maxWidth: 333,
    // bottom: 110,
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    top: -120,
  },
}));

export default function SectionB() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Hidden smDown>
        <div className={classes.imageContainer}>
          <ImageLoader imageName="sectionBImage" className={classes.backgroundImage} />
        </div>
      </Hidden>
      <Container className={classes.container}>
        <Grid container alignItems="center" justify="center" className={classes.grid}></Grid>
      </Container>
    </section>
  );
}
