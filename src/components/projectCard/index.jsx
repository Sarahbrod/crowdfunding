import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

const ProjectCard = (props) => {
    const { project } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${project.id}`}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <h3>Goal: ${project.goal}</h3>
            </Link>
        </div>
    )
}

export default ProjectCard