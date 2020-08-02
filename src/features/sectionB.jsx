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
  Tooltip,
} from '@material-ui/core';

import ImageLoader from '../components/imagesLoader';
import Slider from '../components/slider';
import ButtonCard from '../components/buttonCard';

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
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(6),
    borderRadius: 10,
    '& > *': {
      marginBottom: 30,
    },
  },
  textWithIcon: {
    display: 'flex',
  },
  textField: {
    width: 117,
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
    },
    '& .MuiInputBase-input': {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  tooltipIcon: {
    marginLeft: 5,
  },
}));

const marks = [
  {
    value: 0,
    label: '5 min',
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
    label: '1 jour',
    text: '1 jour',
  },
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
        <Grid container alignItems="flex-start" justify="flex-start" className={classes.grid} spacing={5}>
          <Grid item xs={12} md={9}>
            <Paper className={classes.paper} elevation={6}>
              <Typography variant="h2" color="textPrimary" gutterBottom>
                <Box fontSize={24}>Parlez-nous de votre projet</Box>
              </Typography>

              <Typography variant="subtitle2" className={classes.textWithIcon}>
                La session sera t-elle guidée par un animateur ?
                <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
                  <div>
                    <TooltipIcon className={classes.tooltipIcon} />
                  </div>
                </Tooltip>
              </Typography>

              <div>
                <Button variant="contained" size="large" color="primary" disableElevation>
                  Oui
                </Button>
                <Button variant="outlined" size="large" color="primary" disableElevation>
                  Non
                </Button>
              </div>
              <Typography variant="subtitle2">Comment se déroulera la session ?</Typography>
              <Grid container direction="row" alignItems="center" justify="space-between">
                <Grid item>
                  <ButtonCard>
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
                Combien de temps durera la session ? <TooltipIcon className={classes.tooltipIcon} />
              </Typography>
              <Slider min={0} max={15} defaultValue={6} step={null} marks={marks} />
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Typologie des participants <TooltipIcon className={classes.tooltipIcon} />
              </Typography>
              <Slider min={0} max={15} defaultValue={6} step={null} marks={marks} />
              <Typography variant="subtitle2" className={classes.textWithIcon}>
                Quand doit avoir lieu la session ? <TooltipIcon className={classes.tooltipIcon} />
              </Typography>
              <Slider min={0} max={15} defaultValue={6} step={null} marks={marks} />
              <Typography variant="subtitle2">Nombre de participant</Typography>
              <TextField defaultValue={8} variant="outlined" size="small" type="number" className={classes.textField} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={6}>
              <CardHeader></CardHeader>
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
