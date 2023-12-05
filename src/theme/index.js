import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

// Component style overrides
import Button from './components/button';
import Text from './components/text';
// Foundational style overrides
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
// Global style overrides
import styles from './styles';
import './index.css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme(
  {
    config,
    styles,
    breakpoints,
    colors,
    fonts: {
      heading: 'Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
  },
  {
    components: {
      Button,
      Text,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'black',
    components: ['Progress'],
  })
);

export default customTheme;