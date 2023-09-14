import React from 'react';
import Button from '../components/DownloadButton.js';

function AboutPage() {
    return (
        <>

    <div class="center-container">
        <img src="images/selfie.png" alt="" class="portrait"></img>
        <article class="container">
            <h2>I'm Hayden</h2>
            <br></br>
            <Button download>Download Resume</Button>
            <p>
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have interest in full stack development, data science, and machine learning.
                I'm especially interested in the intersection of biology and computer science, and I'm looking to work on projects that combine the two.
                I am also intrigued by dev ops practices such as CI/CD and implementing infrastructure as code.  <br></br><br></br>
                I run a homelab server that I use to experiment with different Linux environments, run self hosted services, and learn dev tools.
                I am currently using it to learn Kubernetes on a local cluster running CentOS.  It also contains a GPU cluster that I intend on leveraging for machine learning projects.
                Outside of the tech world I enjoy games and travelling.
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