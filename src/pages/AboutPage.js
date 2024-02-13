import React from 'react';
import Button from '../components/DownloadButton.js';

function AboutPage() {
    return (
        <>

    <div class="center-container" style={{ paddingTop:"40px" }}>
        {/* <img src="images/selfie.png" alt="" class="portrait" width="250" margin="20px"></img> */}
        <article class="container">
            <h2>I'm Hayden, a US based software developer.</h2>
            <br></br>
            <Button download>Download Resume</Button>
            <p>
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have an interest in full-stack development, data science, and dev ops.
                <br></br><br></br>
                
                I run a home lab server that I use to experiment with different Linux environments, deploy self-hosted services, and learn dev tools.
                I am looking to expand my knowledge and skills in cloud computing, IaC, and CI/CD.
                Outside of the tech world I enjoy strategy games and travelling.
                <br></br>
                <br></br>
                I have experience with:
                <ul class="two-column-list">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Flask</li>
                    <li>Databases</li>
                    <li>Git</li>
                    <li>Docker</li>
                </ul>
            </p>
        </article>
    </div>
        </>
    );
}

export default AboutPage;