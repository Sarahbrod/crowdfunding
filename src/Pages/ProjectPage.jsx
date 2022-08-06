import React from "react";
import { oneProject } from "../data";


function ProjectPage() {
    return (
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            <h3> Status: {oneProject.is_open} </h3>
            <h3>Pledges:</h3>
            <ul>
                {
                    oneProject.pledges.map((pledge, index) => {
                        return (
                            <li>
                                {pledge.amount} from {pledge.supporter}
                            </li>
                        );
                    })}
            </ul>
        </div>

    );

}

export default ProjectPage;