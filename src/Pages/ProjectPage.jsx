
import React from 'react'
import { oneProject } from '../data'

function ProjectPage() {
    return (
        <div>
            <h1>{oneProject.title}</h1>
            <h3>Created At: {oneProject.date_created}</h3>
            <h3>Status: {oneProject.is_open}</h3>
            <ul>
                {oneProject.pledges.map((pledge, index) => (
                    <li key={index}>{pledge.amount} from {pledge.supporter}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectPage