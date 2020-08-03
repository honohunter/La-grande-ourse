import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';

import orkney from '../assets/fonts';

import SEO from '../components/seo';
import Header from '../features/header';
import SectionA from '../features/sectionA';
import SectionB from '../features/sectionB';
import SectionC from '../features/sectionC';
import SectionD from '../features/sectionD';
import Footer from '../features/footer';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 6,
      },
      sizeLarge: {
        height: 43,
      },
      label: {
        marginTop: 5,
      },
    },

    MuiCssBaseline: {
      '@global': {
        '@font-face': orkney,
        backgroundColor: '#ffffff',
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    MuiOutlinedInput: {
      input: {
        backgroundColor: '#ffffff',
      },
    },
  },
  palette: {
    primary: {
      main: '#2e5bcc',
    },
    secondary: {
      main: '#fe5071',
    },
    text: {
      primary: '#002aaf',
      secondary: '#ffffff',
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
    subtitle2: {
      fontSize: 18,
      fontWeight: 400,
      color: '#505361',
    },
  },
});

theme = responsiveFontSizes(theme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Home" />
      <CssBaseline />
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
