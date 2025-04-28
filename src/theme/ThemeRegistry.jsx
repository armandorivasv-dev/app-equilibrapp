'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { customTheme } from './get-custom-theme';
import { Box } from '@mui/material';

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box sx={{ flex: '1 0 auto' }}>{children}</Box>
    </ThemeProvider>
  );
}
