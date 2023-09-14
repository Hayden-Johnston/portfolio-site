import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Say Hello</Button>
    </Stack>
  );
}