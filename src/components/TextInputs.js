import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInputs() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Email"
        />
        <br></br>
        <TextField
          id="outlined-required"
          label="Subject"
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Message"
        />
        
      </div>
    </Box>
  );
}