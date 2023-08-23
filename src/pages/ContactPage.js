import React, { useState } from 'react';
import TextInputs from '../components/TextInputs.js';
import Button from '../components/SubmitButton.js';

function ContactPage() {
  const [name, setName] = useState('');
  return (
    <>
    <div class="center-container">
    <h2>Contact:</h2>
    </div>
    <div class="center-container">
      
        <form>
          <fieldset>
            

              <TextInputs/>
              <br></br>
              <Button></Button>
              
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default ContactPage;