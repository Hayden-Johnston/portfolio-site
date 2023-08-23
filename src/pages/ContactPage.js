import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  return (
    <>
      <h2>Contact Us</h2>
      <p>Contact using this secure form below:</p>
        <form>
          <fieldset>
            <legend>Your Details</legend>

              <label>Name:
                <input type="text" value={name}
                  onChange={e => setName(e.target.value)} />
              </label>
              <br></br>
              <label>Email:
                <input type="text" value={name}
                  onChange={e => setName(e.target.value)} />
              </label>
              <br></br>
              <label>Subject:
                <input type="text" value={name}
                  onChange={e => setName(e.target.value)} />
              </label>
              <br></br>
              <label>Message:
                <input type="text" value={name}
                  onChange={e => setName(e.target.value)} />
              </label>
              <br></br>
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