import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" href='files/Hayden_Johnston_Resume.pdf' download='Hayden_Johnston_Resume.pdf'>Download Resume</Button>
    </Stack>
  );
}
