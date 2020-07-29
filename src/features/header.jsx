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
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Logo from '../assets/images/logo-la-grande-ourse.svg';

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionL: {
    flexGrow: 1,
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
  },
  h3: {
    fontSize: 18,
    fontWeight: 300,
  },
  h2: {
    fontSize: 28,
    fontWeight: 300,
  },
  mobileMenu: {
    backgroundColor: '#ebf0fb',
    position: 'absolute',
    width: '100%',
    zIndex: 100,
  },
  mobileMenuPanel: {
    padding: theme.spacing(0, 5, 5, 5),
  },
  iconButton: {
    marginLeft: 'auto',
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
      {isMobileMenuOpen ? (
        <Hidden lgUp>
          <div className={classes.mobileMenu}>
            <List component="nav">
              <ListItem>
                <IconButton className={classes.iconButton} onClick={handleMenuButtonClick}>
                  <CloseIcon />
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
      ) : (
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
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuButtonClick}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </AppBar>
        </Container>
      )}
    </div>
  );
}
