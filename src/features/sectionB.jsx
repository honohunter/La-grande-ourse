import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Typography,
  Hidden,
  Container,
  Grid,
  Box,
  Paper,
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

import ImageLoader from '../components/imagesLoader';
import Slider from '../components/slider';
import ButtonCard from '../components/buttonCard';
import Tooltip from '../components/tooltip';

import TooltipIcon from '../assets/icons/tooltipIcon.inline.svg';

import Image1 from '../assets/images/sectionB-image-1.inline.svg';
import Image2 from '../assets/images/sectionB-image-2.inline.svg';
import Image3 from '../assets/images/sectionB-image-3.inline.svg';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    // height: 700,
    // backgroundColor: '#f8f8f8',
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
  container: {
    position: 'relative',
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5,0),
    },
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(0),
    },
  },
  paper: {
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(6, 2),
    },
    padding: theme.spacing(6),
    borderRadius: 10,
    '& > *': {
      marginBottom: 30,
    },
  },
  textWithIcon: {
    display: 'flex',
  },
  buttonSection: {
    maxWidth: 400,
    display: 'flex',
    '& .MuiButton-root:first-child': {
      marginRight: 20,
    },
  },
  textField: {
    width: 117,
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      overflow: 'hidden',
    },
    '& .MuiInputBase-input': {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  tooltipIcon: {
    marginLeft: 5,
  },
  gridSpacing: {
    padding: theme.spacing(5),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(5, 0),
    },
  },
  card: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: theme.spacing(3, 8),
    backgroundColor: theme.palette.secondary.main,
  },
  cardBody: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },
  outputSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  outputText: {
    width: 160,
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      overflow: 'hidden',
    },
    '& .MuiInputBase-input': {
      fontSize: 26,
      fontWeight: 500,
      textAlign: 'right',
      marginBottom: -5,
    },
  },
}));

const marks = [
  {
    value: 0,
    label: '',
    text: '5 min',
  },
  {
    value: 1,
    label: '',
    text: '10 min',
  },
  {
    value: 2,
    label: '',
    text: '20 min',
  },
  {
    value: 3,
    label: '',
    text: '30 min',
  },
  {
    value: 4,
    label: '',
    text: '40 min',
  },
  {
    value: 5,
    label: '',
    text: '50 min',
  },
  {
    value: 6,
    label: '',
    text: '1h',
  },
  {
    value: 7,
    label: '',
    text: '1h30',
  },
  {
    value: 8,
    label: '',
    text: '2h',
  },
  {
    value: 9,
    label: '',
    text: '2h30',
  },
  {
    value: 10,
    label: '',
    text: '3h',
  },
  {
    value: 11,
    label: '',
    text: '3h30',
  },
  {
    value: 12,
    label: '',
    text: '4h',
  },
  {
    value: 13,
    label: '',
    text: '4h30',
  },
  {
    value: 14,
    label: '',
    text: '5h',
  },
  {
    value: 15,
    label: '',
    text: '1 jour',
  },
];
const marks2 = [
  {
    value: 0,
    label: '',
    text: 'Tout le monde',
  },
  {
    value: 1,
    label: '',
    text: 'Collègue',
  },
  {
    value: 2,
    label: '',
    text: 'Grand public',
  },
  {
    value: 3,
    label: '',
    text: 'Complexité modérée',
  },
  {
    value: 4,
    label: '',
    text: 'Complexité moyenne',
  },
  {
    value: 5,
    label: '',
    text: 'Complexité élevée',
  },
  {
    value: 6,
    label: '',
    text: 'Complexité très élevée',
  },
  {
    value: 7,
    label: '',
    text: 'Ingénieur(e)',
  },
  {
    value: 8,
    label: '',
    text: 'Avocat(e)',
  },
  {
    value: 9,
    label: '',
    text: 'Médecin',
  },
  {
    value: 10,
    label: '',
    text: 'Cible très très rare',
  },
  {
    value: 11,
    label: '',
    text: 'Michelle Obama',
  },
];
const marks3 = [
  {
    value: 0,
    label: '',
    text: 'Pas de contrainte de temps',
  },
  {
    value: 1,
    label: '',
    text: 'Le mois prochain',
  },
  {
    value: 2,
    label: '',
    text: 'Dans 1 à 2 semaine',
  },
  {
    value: 3,
    label: '',
    text: 'Cette semaine',
  },
  {
    value: 4,
    label: '',
    text: 'Demain',
  },
  {
    value: 5,
    label: "",
    text: "Aujourd'hui : No comment",
  },
];

const longText = [
  "Ces différents modes d'organisation ont un impact sur le montant de la gratification car les contraintes de date/durée/déplacements sont variables.",
  "En fonction des différents contextes le montant de la gratifications est variable car l'effort/les contraintes de chaque participant sont différents.",
  "La durée de la session à un impact sur le montant de la gratification car il s'agit du dédommagement pour le temps que consacre le participant.",
  'La typologie des participants a un impact sur le montant de la gratification car selon le profil, les exigences en terme de montant sont différentes (ainsi que son temps disponible pour effectuer une session.)',
  "Le délais et le niveau d'urgence pour effectuer la session est un paramètre important rentrant en compte dans la décision de participation à une session.",
  "Le nombre de participant pour l'ensemble de l'étude permettra de calculer le montant total des gratifications à prévoir.",
];

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
        <Grid container alignItems="flex-start" justify="flex-start" className={classes.grid}>
          <Grid item xs={12} md={8} className={classes.gridSpacing}>
            <Paper className={classes.paper} elevation={6}>
              <Typography variant="h2" color="textPrimary" gutterBottom>
                <Box fontSize={24}>Parlez-nous de votre projet</Box>
              </Typography>

              <Typography variant="subtitle2" className={classes.textWithIcon}>
                La session sera t-elle guidée par un animateur ?
                <Tooltip title={longText[0]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <div className={classes.buttonSection}>
                <Button variant="contained" size="large" color="primary" disableElevation fullWidth>
                  Oui
                </Button>
                <Button variant="outlined" size="large" color="primary" disableElevation fullWidth>
                  Non
                </Button>
              </div>
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Comment se déroulera la session ?
                <Tooltip title={longText[1]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <Grid container direction="row" alignItems="center" justify="space-evenly" wrap="nowrap" spacing={1}>
                <Grid item>
                  <ButtonCard active>
                    <Image1 />
                    <div>Le participant et l'animateur sont à distance</div>
                    <div>Visio, téléphone...</div>
                  </ButtonCard>
                </Grid>
                <Grid item>
                  <ButtonCard>
                    <Image2 />
                    <div>Le participant se déplace chez l'animateur</div>
                    <div>Vos bureaux, labo...</div>
                  </ButtonCard>
                </Grid>
                <Grid item>
                  <ButtonCard>
                    <Image3 />
                    <div>L'animateur se déplace chez le participant</div>
                    <div>Chez lui, à son bureau...</div>
                  </ButtonCard>
                </Grid>
              </Grid>
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Combien de temps durera la session ?
                <Tooltip title={longText[2]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <Slider min={0} max={marks.length - 1} defaultValue={6} step={null} marks={marks} />
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Typologie des participants
                <Tooltip title={longText[3]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <Slider min={0} max={marks2.length - 1} defaultValue={2} step={null} marks={marks2} />
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Quand doit avoir lieu la session ?
                <Tooltip title={longText[4]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <Slider min={0} max={marks3.length - 1} defaultValue={6} step={null} marks={marks3} />
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Nombre de participant
                <Tooltip title={longText[5]}>
                  <TooltipIcon className={classes.tooltipIcon} />
                </Tooltip>
              </Typography>
              <TextField defaultValue={8} variant="outlined" size="small" type="number" className={classes.textField} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}  className={classes.gridSpacing}>
            <Paper elevation={6} className={classes.card}>
              <div className={classes.cardHeader}>
                <Typography variant="body2" align="center" color="textSecondary">
                  Montant recommandé
                </Typography>
              </div>
              <div className={classes.cardBody}>
                <div className={classes.outputSection}>
                  <TextField value="55€" variant="outlined" size="small" className={classes.outputText} />
                  <Typography variant="body2" align="center" color="textSecondary" component="div">
                    <Box fontWeight={500}>/participant</Box>
                  </Typography>
                </div>
                <Typography variant="h3" align="center" color="textSecondary" component="div">
                  <Box fontWeight={400} margin={3}>
                    Soit <b>330€</b> pour 8 participants
                  </Box>
                </Typography>
                <Typography align="center" color="textSecondary" component="div">
                  <Box fontWeight={400} fontSize={12}>
                    Ce montant est calculé sur étude des prix constatés.
                  </Box>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
