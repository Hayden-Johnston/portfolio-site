import React from 'react';
import Button from '../components/DownloadButton.js';

function AboutPage() {
    return (
        <>

    <div class="center-container">
        <img src="images/selfie.png" alt="" class="portrait" width="250"></img>
        <article class="container">
            <h2>I'm Hayden, a US based developer.</h2>
            <br></br>
            <Button download>Download Resume</Button>
            <p>
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have an interest in full-stack development, data science, and dev ops.
                I am actively studying for the AWS Solutions Architect Associate certification to learn about cloud computing and infrastructure.  In the future I plan to explore Terraform as an IaC solution.
                I am also learning about implementing robust CI/CD pipelines and have set this site up with continuous deployment through Netlify.
                <br></br><br></br>
                
                I run a home lab server that I use to experiment with different Linux environments, deploy self-hosted services, and learn dev tools.
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