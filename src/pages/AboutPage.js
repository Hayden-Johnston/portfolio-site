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
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have an interest in full-stack development, data science, and dev ops.
                This site is continuously deployed on Netlify and I am exploring building robust CI/CD pipelines.
                I am also studying for the AWS Solutions Architect certification and learning to apply Terraform as an IaC solution.
                <br></br><br></br>
                
                I run a home lab server that I use to experiment with different Linux environments, run self-hosted services, and learn dev tools.
                I am in the process of configuring GPU nodes that I intend to leverage for machine learning projects.  I am also currently using it to learn Kubernetes on a local cluster running CentOS.
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