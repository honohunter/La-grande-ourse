import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
} from '@material-ui/core';

import Logo from '../assets/images/logo-la-grande-ourse.inline.svg';
import LinkedInIcon from '../assets/icons/linkedIn.square.inline.svg';
import FacebookIcon from '../assets/icons/facebook.square.inline.svg';
import InstagramIcon from '../assets/icons/instagram.square.inline.svg';
import TwitterIcon from '../assets/icons/twitter.square.inline.svg';
import PatreonIcon from '../assets/icons/patreon.square.inline.svg';
import YoutubeIcon from '../assets/icons/youtube.square.inline.svg';

import HeartIcon from '../assets/icons/heart.inline.svg';

import ImagesLoader from '../components/imagesLoader';

const useStyles = makeStyles(theme => ({
  section: {
    // height: 677,
    backgroundColor: '#2e5bcc',
    color: '#ffffff',
  },
  container: {
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      padding: '0 100px',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3),
    },
  },
  logoWrapper: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 0),
    },
    padding: theme.spacing(8, 0),
  },
  logo: {
    fill: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
    width: 300,
  },
  textSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(5, 0),
    '& > *': {
      fontWeight: 600,
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1.5, 0),
      },
    },
  },
  bottomTextSection: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 0),
  },
  imageLogo: {
    width: 31,
    marginLeft: 10,
  },
  firstListElement: {
    fontWeight: 600,
    paddingBottom: theme.spacing(2),
  },
  iconsSection: {
    marginBottom: theme.spacing(3),
  },
  inputLabelPropsFocused: {
    color: 'transparent !important',
  },
  inputProps: {
    color: '#000000',
  },
  button: {
    border: '1px solid white',
    borderRadius: 6,
    height: 40,
    marginLeft: 10,
  },
  formInput: {
    display: 'flex',
    marginBottom: 10,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} />
        </div>
        <Grid container justify="center" alignItems="flex-start" className={classes.gridContainer}>
          <Grid item xs={12} md={2}>
            <List>
              <ListItem>
                <Typography variant="h3" className={classes.firstListElement}>
                  {/* <Box fontWeight="600">Site</Box> */}
                  Site
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Agence</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Expertise</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Valeur</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Réalisation</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Boutique</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Blog</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Ils parlent de nous</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={2}>
            <List>
              <ListItem>
                <Typography variant="h3" className={classes.firstListElement}>
                  Services
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Audit UX</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Nos podcasts</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={2}>
            <List>
              <ListItem>
                <Typography variant="h3" className={classes.firstListElement}>
                  Contact
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Nous contacter</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Nous rejoindre</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem>
                <Typography variant="h3" className={classes.firstListElement}>
                  Outils
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Ressources gratuites</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Lexique</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h3">Lexique</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem>
                <Typography variant="h3" gutterBottom>
                  <Box fontWeight={600}>Suivez-nous</Box>
                </Typography>
              </ListItem>
              <div className={classes.iconsSection}>
                <FacebookIcon className={classes.costumeIcon} />
                <InstagramIcon className={classes.costumeIcon} />
                <TwitterIcon className={classes.costumeIcon} />
                <LinkedInIcon className={classes.costumeIcon} />
                <PatreonIcon className={classes.costumeIcon} />
                <YoutubeIcon className={classes.costumeIcon} />
              </div>
              <ListItem>
                <Typography variant="h3" gutterBottom>
                  <Box fontWeight={600}>S’inscrire à la newsletter</Box>
                </Typography>
              </ListItem>
              <form>
                <div className={classes.formInput}>
                  <TextField
                    label="Votre email"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{
                      shrink: false,
                      classes: { focused: classes.inputLabelPropsFocused },
                    }}
                    InputProps={{ classes: { root: classes.inputProps } }}
                  />
                  <Button variant="contained" color="primary" disableElevation className={classes.button}>
                    Ok
                  </Button>
                </div>
              </form>
              <ListItem>
                <Typography variant="h3">
                  <Box fontSize={14}>Nous envoyons uniquement aux emails nominatifs.</Box>
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <div className={classes.textSection}>
          <Typography variant="h3" component="div">
            Mentions légales
          </Typography>
          <Typography variant="h3" component="div">
            Charte des cookies
          </Typography>
          <Typography variant="h3" component="div">
            CGV/CGU
          </Typography>
        </div>
      </Container>
      <div className={classes.bottomTextSection}>
        <Typography variant="subtitle1">
          <Box fontWeight={400}>
            @2020 - Design with <HeartIcon /> by <b>La grande Ourse</b>
          </Box>
        </Typography>
        <ImagesLoader imageName="imageLogo" className={classes.imageLogo} />
      </div>
    </section>
  );
}
