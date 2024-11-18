import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bc4d40', // Dark red color for primary
    },
    secondary: {
      main: '#004d00', // Orange color for secondary
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
