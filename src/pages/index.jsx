import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';

import orkney from '../assets/fonts';

import SEO from '../components/seo';
import Header from '../features/header';
import SectionA from '../features/sectionA';
import SectionB from '../features/sectionB';
import SectionC from '../features/sectionC';
import SectionD from '../features/sectionD';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 6,
      },
      sizeLarge: {
        height: 43,
      },
    },

    MuiCssBaseline: {
      '@global': {
        '@font-face': orkney,
        backgroundColor: '#ffffff',
      },
    },
  },
  palette: {
    primary: {
      main: '#2e5bcc',
    },
    text: {
      primary: '#002aaf',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'orkney',
    button: {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 500,
    },
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h2: {
      fontSize: 28,
      fontWeight: 500,
      color: '#000000',
    },
    h3: {
      fontSize: 18,
      fontWeight: 300,
    },
    body2: {
      fontSize: 20,
      fontWeight: 400,
      color: '#505361',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
      color: '#505361',
      lineHeight: 1.5,
    },
  },
});

theme = responsiveFontSizes(theme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Enhance" />
      <CssBaseline />
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
    </ThemeProvider>
  );
};

export default IndexPage;
