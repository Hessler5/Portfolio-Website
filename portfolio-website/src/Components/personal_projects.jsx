import React from "react";

function PersonalProject( {projectTitle, description, img1, img2, img3} ) {
    return (
        <div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <img className = "sticky-note m-6 w-1/5 max-[480px]:w-screen max-[480px]:m-0 max-[480px]:my-6" src={img1}/>
                    <img className = "sticky-note m-6 w-1/5 max-[480px]:w-screen max-[480px]:m-0" src={img2}/>
                    <img className = "sticky-note m-6 w-1/5 max-[480px]:w-screen max-[480px]:m-0 max-[480px]:my-6" src={img3}/>
                </div>
                <div className = "sticky-note w-5/6 max-[480px]:w-screen p-5 bg-white mb-6 flex flex-wrap jusify-center">
                    <div className = "pin-container flex justify-between w-full">
                        <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                        <h1 className = "m-5 text-center w-full text-6xl">{projectTitle}</h1>
                        <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                    </div>
                    <p className="w-full text-center text-xl">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalProject;