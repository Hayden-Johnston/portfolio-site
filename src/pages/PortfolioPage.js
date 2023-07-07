import React from 'react';
import ContentCard from '../components/ContentCard';
import projects from '../data/projects.js';

function PortfolioPage() {
    return (
        <>

    <h2>This is the portfolio page</h2>
    <article>
        {projects.map((project) => <ContentCard project={project} />)}
    </article>
        </>
    );
}

export default PortfolioPage;