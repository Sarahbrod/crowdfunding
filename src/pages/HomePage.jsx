import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import Hero from '../components/Hero/Hero';

function HomePage() {
    const [projectData, updateProjectData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then(res => res.json())
            .then(data => //{data.filter{projectData.is_open}}
                updateProjectData(data))

    }, [])

    return (
        <>
            <Hero />
            <h2 className="projectlist-title"> All Projects</h2>
            <div id='project-list'>
                {projectData.map((project, key) => {
                    return <ProjectCard key={key} project={project} />;
                })}
            </div>
        </>

    );
}

export default HomePage;

