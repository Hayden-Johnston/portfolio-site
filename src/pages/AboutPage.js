import React from 'react';
import Button from '../components/DownloadButton.js';

function AboutPage() {
    return (
        <>

    <div class="center-container">
        <img src="images/selfie.png" class="portrait"></img>
        <article class="container">
            <h2>I'm Hayden</h2>
            <Button href="files/Hayden_Johnston_Resume.pdf" download>Download Resume</Button>
            <p>
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have interest in full stack development, data science, and machine learning.
                I'm especially interested in the intersection of biology and computer science, and I'm looking to work on projects that combine the two.
                I am also intrigued by devops practices such as CI/CD and IaC.  <br></br><br></br>
                I run a homelab server that hosts a variety of services including authentication, a dev environment, and a NextCloud Instance.  It allows me to experiment with different linux environments and deploy containers which I route through DDNS and a reverse proxy.
                Outside of the tech world I enjoy games and travelling.
                <br></br>
                <br></br>
                I have experience with:
                <ul class="two-column-list">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Flask</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Docker</li>
                </ul>
            </p>
        </article>
    </div>
        </>
    );
}

export default AboutPage;