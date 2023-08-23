import React from 'react';

function AboutPage() {
    return (
        <>

    <div class="center-container">
        <img src="images/selfie.png" class="portrait"></img>
        <article class="container">
            <h2>I'm Hayden</h2>
            <p>
                Initially trained in biochemistry, I'm currently studying computer science to pursue software engineering. I have interest in full stack development, data science, and machine learning.
                I'm especially interested in the intersection of biology and computer science, and I'm looking to work on projects that combine the two.
                I am also intrigued by devops practices such as CI/CD and IaC.  <br></br><br></br>
                I run a homelab server that hosts a variety of services including a dev environment, a NextCloud Instance, and Authelia.
                If I'm not working on my server, I'm playing chess or Baldur's Gate 3.
                <br></br>
                <br></br>
                I have experience with:
                <ul>
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