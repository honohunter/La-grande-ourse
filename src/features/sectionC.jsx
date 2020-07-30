import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Hidden, Container, Grid, Box, Button, Avatar } from '@material-ui/core';

import ImageLoader from '../components/imagesLoader';

import SectionCBackground from '../assets/images/sectionC-background.svg';
import SectionCMobileBackground from '../assets/images/sectionC-mobile-background.svg';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundImage: `url(${SectionCMobileBackground})`,
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${SectionCBackground})`,
    },
  },
  container: {
    height: '100%',
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '74px 24px',
    [theme.breakpoints.only('xs')]: {
      padding: '74px 12px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '48px',
    },
  },
  fullHeightContainer: {
    height: '100%',
  },
  backgroundImage: {
    [theme.breakpoints.only('md')]: {
      width: 'unset',
    },
    width: '100%',
    height: '100%',
  },
  divideBar: {
    minHeight: 120,
  },
  image1: {
    margin: 'auto',
    width: 191,
    [theme.breakpoints.down('md')]: {
      maxWidth: 105,
    },
  },
  image2: {
    margin: 'auto',
    width: 258,
    [theme.breakpoints.down('md')]: {
      maxWidth: 142,
    },
  },
  image3: {
    margin: 'auto',
    width: 258,
    [theme.breakpoints.down('md')]: {
      maxWidth: 128,
    },
  },
  image4: {
    margin: 'auto',
    width: 214,
    [theme.breakpoints.down('md')]: {
      maxWidth: 112,
    },
  },
  button: {
    maxWidth: 255,
    marginTop: theme.spacing(6),
  },
}));

export default function SectionB() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      {/* <Hidden smDown>
        <img src={SectionCBackground} className={classes.backgroundImage} />
      </Hidden>
      <Hidden mdUp>
        <img src={SectionCMobileBackground} className={classes.backgroundImage} />
      </Hidden> */}

      <Container className={classes.container}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          className={classes.fullHeightContainer}
        >
          {/* <div className={classes.divideBar} /> */}
          <Box margin={6}>
            <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
              Besoin d'aide pour vos projets ?
            </Typography>
            <Typography variant="h3" align="center">
              Grâce à nos 4 pôles d'expertises, nos créateurs d'expériences assurent la conception globale de produits
              et de services.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <ImageLoader imageName="sectionCImage1" className={classes.image1} />
              <Box marginTop={6} marginBottom={10}>
                <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                  UX Strategy
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                À travers différentes méthodes de recherche, notre équipe d'UX strategists a pour mission de croiser les
                besoins business et utilisateurs, pour assurer et challenger votre vision stratégique.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <ImageLoader imageName="sectionCImage2" className={classes.image2} />
              <Box marginTop={8} marginBottom={11}>
                <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                  UX Design
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                Nos UX designers, aussi appelés Designers de services, ont pour rôle de concevoir des produits digitaux
                et phygitaux. Ils interviennent lors de la création, refonte ou optimisation de vos services.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <ImageLoader imageName="sectionCImage3" className={classes.image3} />
              <Box marginTop={7} marginBottom={6}>
                <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                  UI Design & <br /> Direction Artistique
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                Nos UI et DA sont responsables du design visuel et de l'engagement émotionnel de vos utilisateurs. Ils
                respectent l’identité de votre marque et donnent vie à des produits agréables à utiliser.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <ImageLoader imageName="sectionCImage4" className={classes.image4} />
              <Box marginTop={6} marginBottom={10}>
                <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                  UX Writing
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                L'UX Writer travaille main dans la main avec les UX/UI designers. C'est un professionnel en charge de la
                rédaction du contenu pour le compte de l'entreprise au service de l'utilisateur.
              </Typography>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" disableElevation fullWidth className={classes.button}>
            Contactez-nous
          </Button>
        </Grid>
      </Container>
    </section>
  );
}
