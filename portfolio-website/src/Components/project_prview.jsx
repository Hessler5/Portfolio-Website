import React from "react";

function Project_Preview({projectName, projectImg, projectCopy}) {
    return (
        <div>
            <h1>{projectName}</h1>
            <div>
                <img src = {projectImg}/>
                <p>{projectCopy}</p>
            </div>
        </div>
    )
}

export default Project_Preview;