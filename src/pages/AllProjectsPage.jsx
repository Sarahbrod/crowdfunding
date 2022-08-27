import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';

function AllProjectsPage() {
    const [projectData, updateProjectData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then(res => res.json())
            .then(data =>
                updateProjectData(data))

    }, [])

    return (
        <div id='project-list'>
            {projectData.map((project, key) => {
                return <ProjectCard key={key} project={project} />;
            })}
        </div>

    );
}

export default AllProjectsPage