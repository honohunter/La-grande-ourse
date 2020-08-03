/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Hidden,
  ButtonBase,
  List,
  ListItem,
  Link,
  Container,
} from '@material-ui/core';

import Logo from '../assets/images/logo-la-grande-ourse.inline.svg';
import MobileMenuBackground from '../assets/images/mobileMenu-background.svg';
import MenuIcon from '../assets/icons/menuIcon.inline.svg';
import CloseIcon from '../assets/icons/closeIcon.inline.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  toolbar: {
    [theme.breakpoints.up('md')]: {
      height: 103,
    },
    padding: 0,
  },

  sectionL: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  sectionR: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: 150,
    },
    fill: '#002AAF',
    width: 226,
  },

  h2: {
    fontWeight: 300,
  },
  mobileMenu: {
    backgroundColor: '#ebf0fb',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    overflow: 'hidden',
    backgroundImage: `url(${MobileMenuBackground})`,
    backgroundSize: 'cover',
  },
  mobileMenuPanel: {
    padding: theme.spacing(0, 5, 5, 5),
  },
  iconButton: {
    stroke: '#505361',
  },
  menuButton: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
  },
  activeLink: {
    fontWeight: 500,
    borderBottom: '3px solid #aec9ff',
  },
}));

const pages = [
  { text: 'L’agence', link: '#1' },
  { text: 'Expertises', link: '#2' },
  { text: 'Valeurs', link: '#3' },
  { text: 'Réalisations', link: '#4' },
  { text: 'Boutique', link: '#5' },
  { text: 'Blog', link: '#6' },
];

const mobilePages = [
  { text: 'Accueil', link: '#home' },
  { text: 'L’agence', link: '#1' },
  { text: 'Expertises', link: '#2' },
  { text: 'Valeurs', link: '#3' },
  { text: 'Réalisations', link: '#4' },
  { text: 'Boutique', link: '#5' },
  { text: 'Blog', link: '#6' },
  { text: 'Prendre contact', link: '#7' },
];

export default function Header() {
  const classes = useStyles();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleMenuButtonClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = ({ link }) => {
    setActiveLink(link);
  };

  return (
    <div className={classes.root}>
      {isMobileMenuOpen && (
        <Hidden lgUp>
          <div className={classes.mobileMenu}>
            <List component="nav">
              <ListItem>
                <IconButton className={classes.menuButton} onClick={handleMenuButtonClick}>
                  <CloseIcon className={classes.iconButton} />
                </IconButton>
              </ListItem>
              <div className={classes.mobileMenuPanel}>
                {mobilePages.map((page, index) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      handleNavigation(page);
                    }}
                  >
                    <Typography
                      variant="h2"
                      classes={{ h2: classes.h2 }}
                      className={clsx(activeLink === page.link ? classes.activeLink : false)}
                    >
                      {page.text}
                    </Typography>
                  </ListItem>
                ))}
              </div>
            </List>
          </div>
        </Hidden>
      )}
      <Container>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.sectionL}>
              <Logo className={classes.logo} />
            </div>
            <Hidden smDown>
              <div className={classes.sectionR}>
                {pages.map((page, index) => (
                  <ButtonBase
                    key={index}
                    onClick={() => {
                      handleNavigation(page);
                    }}
                  >
                    <Typography
                      variant="h3"
                      classes={{ h3: classes.h3 }}
                      className={clsx(activeLink === page.link ? classes.activeLink : false)}
                    >
                      {page.text}
                    </Typography>
                  </ButtonBase>
                ))}
                <Button color="primary" variant="contained" size="large" disableElevation>
                  Prendre contact
                </Button>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuButtonClick}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
