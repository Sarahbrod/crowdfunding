import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

const ProjectCard = (props) => {
    const { project } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${project.id}`}>
                <img src={project.image} alt={project.title} />
            </Link>
            <h3 className='project-title'>{project.title}</h3>
            <h3 className='project-description'>{project.description}</h3>
            <h3 className='project-goal'>Goal: ${project.goal}</h3>

        </div>
    )
}

export default ProjectCard