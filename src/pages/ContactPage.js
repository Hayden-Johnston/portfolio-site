import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../components/SubmitButton.js';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


function ContactPage() {

    const token = process.env.REACT_APP_EMAILJS;

    const navigate = useNavigate()

    const initialTemplateParams = {
      from_name: '',
      email: '',
      subject: '',
      message: ''
    };
    
      const [templateParams, setTemplateParams] = useState(initialTemplateParams);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTemplateParams((prevParams) => ({
        ...prevParams,
        [name]: value
      }));
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('gmail', 'contact_form', templateParams, token)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });;

        navigate('/')
      };

  return (
    <>
    <div class="center-container" style={{ paddingTop:"40px" }}>
    <h2>Contact</h2>
    </div>
    <br></br>
    <div class="center-container">
      
        <form onSubmit={sendEmail} >
          <fieldset>
                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '60ch' },
                  flex: 1,
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
                    onChange={handleChange}
                  />
                  <br></br>
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    name="user_email"
                    onChange={handleChange}
                  />
                  <br></br>
                  <TextField
                    id="standard-required"
                    label="Subject"
                    name="subject"
                    onChange={handleChange}
                  />
                  <br></br>
                  <TextField
                    required
                    id="standard-required"
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    onChange={handleChange}
                  />
                  
                </div>
              </Box>             
              <div class="center-container">
              <Button></Button>
              </div>
          </fieldset>
        </form>
        
      </div>
    </>
  );
}


export default ContactPage;