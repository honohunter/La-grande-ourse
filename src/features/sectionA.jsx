import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Hidden, Container, Grid } from '@material-ui/core';

import SectionABackground from '../assets/images/sectionA-background.svg';
import SectionALeftImage from '../assets/images/sectionA-left-image.inline.svg';
import SectionARightImage from '../assets/images/sectionA-right-image.inline.svg';

const useStyles = makeStyles(theme => ({
  section: {
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${SectionABackground})`,
      backgroundPositionX: 'center',
      backgroundPositionY: 'bottom',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: 453,
    },
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  sectionALeftImage: {
    position: 'absolute',
    left: -250,
    top: -20,
  },
  sectionARightImage: {
    position: 'absolute',
    bottom: 20,
    right: -230,
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 4),
    },
    top: 0,
    left: 0,
    right: 0,
    height: 435,
  },
  grid: {
    height: '100%',
  },
  textSection: {
    maxWidth: 1145,
    margin: 'auto',
  },
}));

export default function SectionA() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Hidden smDown>
        <SectionALeftImage className={classes.sectionALeftImage} />
      </Hidden>
      <Container className={classes.container}>
        <Grid container direction="row" alignItems="center" justify="center" className={classes.grid}>
          <div className={classes.textSection}>
            <Typography variant="h1" color="textPrimary" align="center" gutterBottom>
              Calculer le montant des gratifications !
            </Typography>
            <Typography variant="body2" align="center">
              Calculer facilement le montant des gratifications des participants pour les phases de recherche et
              d'évaluation.
            </Typography>
            <Typography variant="body2" align="center">
              Vous ne savez pas définir le montant des gratifications ?
            </Typography>
            <Typography variant="body2" align="center">
              Pas de problème, nous le faisons pour vous !
            </Typography>
          </div>
        </Grid>
      </Container>
      <Hidden smDown>
        <SectionARightImage className={classes.sectionARightImage} />
      </Hidden>
    </section>
  );
}
