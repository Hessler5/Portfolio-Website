import React from "react";
import {Link} from "react-router-dom";

function Project_Preview({projectName, projectImg, projectCopy, pageLink}) {
    return (
        <div className = "mb-12 h-5/6 w-5/6 max-[480px]:w-screen">
            <div className = "flex flex-wrap justify-center">
                <img className = "sticky-note w-full max-[480px]:w-screen" src = {projectImg}/>
                <div className = "sticky-note bg-white my-6 flex justify-center flex-wrap">
                    <div className = "pin-container flex justify-between w-full">
                        <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                        <h1 className = "m-5 text-center w-full text-6xl max-[480px]:m-0 max-[480px]:my-3">{projectName}</h1>
                        <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                    </div>
                    <p className = "m-5 text-center text-xl">{projectCopy}</p>
                    <div className = "m-3 outer-shell w-28 h-12">
                        <div className = "mid-shell w-full h-full">
                            <button className = "text-xl bg-white w-full h-full"><Link to={pageLink}>See More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_Preview;