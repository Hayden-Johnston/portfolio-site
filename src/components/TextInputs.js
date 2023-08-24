import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function TextInputs() {

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          name="from_name"
          width="100%"
        />
        <br></br>
        <TextField
          required
          id="standard-required"
          label="Email"
          name="user_email"
        />
        <br></br>
        <TextField
          id="standard-required"
          label="Subject"
          name="subject"
        />
        <br></br>
        <TextField
          required
          id="standard-required"
          label="Message"
          name="message"
          multiline
          rows={5}
        />
        
      </div>
    </Box>
  );
}