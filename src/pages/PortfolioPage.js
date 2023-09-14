import React from 'react';
import ContentCard from '../components/ContentCard';
import projects from '../data/projects.js';

function PortfolioPage() {
    return (
        <>

    <div class="center-container" style={{ paddingTop:"40px" }}>
        <h2>Portfolio</h2>
    </div>
    <div class="center-container">
        <div class="cards-container">
            {projects.map((project) => <ContentCard project={project} class="card"/>)}
        </div>
    </div>
        </>
    );
}

export default PortfolioPage;