import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import hero from '../components/hero';


function HomePage() {
    const [projectData, updateProjectData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then(res => res.json())
            .then(data => //{data.filter{projectData.is_open}}
                updateProjectData(data))

    }, [])

    return (
        <div><hero /></div>
        <div id='project-list'>
            {projectData.map((project, key) => {
                return <ProjectCard key={key} project={project} />;
            })}
        </div>

    );
}

export default HomePage

