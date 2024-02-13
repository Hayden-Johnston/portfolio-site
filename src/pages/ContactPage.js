import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../components/SubmitButton.js';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


function ContactPage() {

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
  
      emailjs.send('gmail', 'contact_form', templateParams)
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
      
        <form onSubmit={sendEmail} width='100%' >
          <fieldset>
                <Box
                component="form"
                sx={{
                  width: '100%',
                  '& .MuiTextField-root': { m: 1, width: '35ch'},
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
                    width='100%'
                    onChange={handleChange}
                  />
                  <br></br>
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    name="user_email"
                    width='100%'
                    onChange={handleChange}
                  />
                  <br></br>
                  <TextField
                    id="standard-required"
                    label="Subject"
                    name="subject"
                    width='100%'
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
                    width='100%'
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