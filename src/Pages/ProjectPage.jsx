
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] })
    const { id } = useParams();

    useEffect(() => {
        console.log(process.env.REACT_APP_API_URL)
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) =>
                results.json()
            )
            .then((data) =>
                setProjectData(data)
            );
    }, []);

    return (
        <div>
            <h1>{projectData.title}</h1>
            <h3>Created At: {projectData.date_created}</h3>
            <h3>Status: {projectData.is_open}</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            ${pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage