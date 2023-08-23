import React, { useState } from 'react';
import TextInputs from '../components/TextInputs.js';
import Button from '../components/SubmitButton.js';

function ContactPage() {
  const [name, setName] = useState('');
  return (
    <>
      <h2>Contact:</h2>
        <form>
          <fieldset>
            

              <TextInputs/>
              <br></br>
              <Button href="files/Hayden_Johnston_Resume.pdf" download>Download Resume</Button>
              <button onClick={e => {
                setName(e.target.value);
                alert(`Your name is ${name}`);
                e.preventDefault();
              }}>Submit
              </button>
              
          </fieldset>
        </form>
    </>
  );
}

export default ContactPage;