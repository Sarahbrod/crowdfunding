import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../Components/projectCard/projectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
            }).
            then((data) => {
                setProjectList(data);
            });
    }, []);
    return (
        <div id="project-list">
            {projectList.map((project, index) => {
                return <ProjectCard key={index} projectData={project} />;
            })}
        </div>
    );
}

export default HomePage;