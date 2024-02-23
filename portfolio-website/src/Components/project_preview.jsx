import React from "react";
import {Link} from "react-router-dom";

function Project_Preview({projectName, projectImg, projectCopy, pageLink}) {
    return (
        <div className = "mb-12 h-5/6 w-5/6 shadow-2xl rounded-lg">
            <div className = "flex flex-wrap justify-center">
                <img className = "rounded-t-lg" src = {projectImg}/>
                <h1 className = "m-5 text-center w-full text-6xl">{projectName}</h1>
                <p className = "m-5 text-center text-xl">{projectCopy}</p>
                <button className = "m-3 text-xl"><Link to={pageLink}>See More</Link></button>
            </div>
        </div>
    )
}

export default Project_Preview;