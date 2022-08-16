import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard/ProjectCard';

const HomePage = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .catch(err => {
                console.log("error is: ", err)
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
        <div id='project-list'>
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} project={projectData} />
            })}
        </div>
    )
}

export default HomePage

