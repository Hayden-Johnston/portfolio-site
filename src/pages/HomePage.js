import React from 'react';
import Button from '../components/ContactButton.js';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>

    <div class="container" style={{ paddingTop:"40px" }}>
    <h2>Hey,</h2>
    <article>
        <h3>I'm Hayden.</h3>
        <p>
            I'm a US based software developer currently studying computer science.  <br></br>
            I have interest in full stack development, data science, and dev ops.
            <br></br>
            <br></br>
            Looking for Internships + Entry level opportunities.
        </p>
    </article>
    <Link to="/contact">
        <Button></Button>
    </Link>
    </div>
        </>
    );
}

export default HomePage;