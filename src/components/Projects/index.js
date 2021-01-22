import React from 'react';

function Projects(props) {
    const{ projects = [] } = props
    return(
        <>
        {projects.map((project) => (
            <div className="project-card">
                <div class="container">
                <h2>{project.title}</h2>
               
                <a href={project.url}>Check out the Repo </a>
                <span>|| </span>
                <a href={project.deployed}>Check out the Deployed</a>
                <hr></hr>
                </div>
            </div>
        ))}
        </>
    );
}

export default Projects;