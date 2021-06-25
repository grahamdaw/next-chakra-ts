import { extendTheme } from '@chakra-ui/react';

/* 
  The following has been adapted from these Reference docs:

  https://chakra-ui.com/docs/features/color-mode
  https://chakra-ui.com/docs/theming/theme
  https://github.com/chakra-ui/chakra-ui/issues/591#issuecomment-719751857

  The layout for the theme customization uses recommendations from Chakra on 
  a more scalable structure:

  https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
*/

import { styles } from './styles';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'arimo, sans-serif',
    body: 'arimo, sans-serif',
  },
  colors: {
    red: '#CC4A33',
    green: '#90C95C',
    textWhite: '#FFFFFF',
    textBlueBlack: '#14171F',
    border: {
      blueGrey: '#CCD3E0',
      mediumBlue: '#6B758F',
    },
    light: {
      icon: {
        color: '#A0ADC5',
        activeColor: '#14171F',
        background: '#FFFFFF',
        activeBackground: '#F0F2F6',
        hoverBackground: '#F5F7F9',
      },
      button: {
        500: '#414B64',
        600: '#6B758F',
        700: '#CCD3E0',
      },
      background: {
        base: '#F2F2F2',
        lighter: '#FFFFFF',
        darker: '#F0F2F6',
      },
      font: {
        primary: '#414B64',
        secondary: '#C0C1C7',
        active: '#2C3865',
        error: '#A13D61',
      },
    },
    dark: {
      icon: {
        color: '#4F4F4F',
        activeColor: '#ECEDEE',
        background: '#1B1B1B',
        activeBackground: '#383838',
        hoverBackground: '#282828',
      },
      button: {
        200: '#C7C9CE',
        300: '#ECEDEE',
        400: '#838593',
      },
      background: {
        base: '#1B1B1B',
        lighter: '#383838',
        darker: '#1C1C1C',
      },
      font: {
        primary: '#C0C1C7',
        secondary: '#838593',
        active: '#3D8EB1',
        error: '#CC6478',
      },
    },
  },
  styles,
  components: {},
});

export default theme;
