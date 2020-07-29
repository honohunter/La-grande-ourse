import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';

import orkney from '../assets/fonts';

import SEO from '../components/seo';
import Header from '../features/header';
import SectionA from '../features/sectionA';
import SectionB from '../features/sectionB';

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
    default: "#ffffff",
    primary: {
      main: '#2e5bcc',
    },
    text: {
      primary: '#002aaf',
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
    body2: {
      fontSize: 20,
      fontWeight: 400,
      color: '#505361',
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
    </ThemeProvider>
  );
};

export default IndexPage;
