import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Box, Button } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

import LinkedInIcon from '../assets/icons/linkedIn.inline.svg';
import FacebookIcon from '../assets/icons/facebook.inline.svg';
import InstagramIcon from '../assets/icons/instagram.inline.svg';
import TwitterIcon from '../assets/icons/twitter.inline.svg';
import PatreonIcon from '../assets/icons/patreon.inline.svg';
import YoutubeIcon from '../assets/icons/youtube.inline.svg';

import ImageLoader from '../components/imagesLoader';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: 500,
    },
  },
  container: {
    height: '100%',
    padding: theme.spacing(10, 3),
  },
  gridContainer: {
    height: '100%',
  },
  backgroundImage: {
    width: 451,
  },
  icon: {
    position: 'relative',
    top: 5,
    margin: '0 5px',
    color: '#8e93a1',
  },
  customIcon: {
    marginRight: 10,
    width: '100%',
  },
  iconsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(3, 0),
  },
  textSection: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(4, 0),
  },
}));

export default function SectionB() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column">
              <div className={classes.textSection}>
                <div>
                  <Typography variant="h2" align="left">
                    <Box fontWeight={300}>Des questions, un besoin ?</Box>
                  </Typography>
                  <Typography variant="h2">
                    <Box fontWeight={300}>Nous serons ravis d’y répondre.</Box>
                  </Typography>
                </div>
                <Button variant="contained" color="primary" disableElevation className={classes.button}>
                  Entrons en contact
                </Button>
                <div>
                  <Box>
                    <Typography variant="subtitle1">
                      <LocationOnIcon className={classes.icon} />5 rue Saint-Joseph, 75002 Paris
                    </Typography>
                    <Typography variant="subtitle1">
                      <CallIcon className={classes.icon} />
                      01 40 26 16 30
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1">
                    <EmailIcon className={classes.icon} />
                    team@lagrandeourse.design
                  </Typography>
                </div>
                <div className={classes.iconsSection}>
                  <LinkedInIcon className={classes.customIcon} />
                  <FacebookIcon className={classes.customIcon} />
                  <InstagramIcon className={classes.customIcon} />
                  <TwitterIcon className={classes.customIcon} />
                  <PatreonIcon className={classes.customIcon} />
                  <YoutubeIcon className={classes.customIcon} />
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
              <ImageLoader imageName="sectionDImage" className={classes.backgroundImage} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
