import React, { useRef, useState } from 'react';
import TextInputs from '../components/TextInputs.js';
import Button from '../components/SubmitButton.js';
import emailjs from '@emailjs/browser';

function ContactPage() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'contact_form', form, "K0zXrFuxfr7gKiqea")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });;
      };

  return (
    <>
    <div class="center-container">
    <h2>Contact</h2>
    </div>
    <br></br>
    <div class="center-container">
      
        <form ref={form} onSubmit={sendEmail}>
          <fieldset>
            <input type="hidden" name="contact_number" />              
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