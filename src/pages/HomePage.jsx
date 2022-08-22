import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import HeroSection from '../components/HeroSection';


< HeroSection />

function HomePage() {
    const [projectData, updateProjectData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then(res => res.json())
            .then(data => //{data.filter{projectData.is_open}}
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

export default HomePage

