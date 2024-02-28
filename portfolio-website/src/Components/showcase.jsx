import React from "react";
import { Link } from "react-router-dom";


function Showcase( {videoSource, websiteLink = false, BlogLink = false, GithubLink = false, APILink = false, techStack = [], libraries = [], projectTitle, description} ) {
        let techStackList = techStack.map(tech => {
            return <li key={tech}>{tech}</li>
        })

        let librariesList = libraries.map(library => {
            return <li key={library}>{library}</li>
        })
    return (
        <div className = "flex flex-wrap justify-center">
            <video className = "mt-5 w-5/6" controls>
                <source src={videoSource} type="video/mp4"/>
            </video>
            <div className = "my-5 flex justify-evenly w-screen">
                {websiteLink || BlogLink || GithubLink || APILink?
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex flex-wrap content-center items-center">
                    {websiteLink?
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href={websiteLink}>Website Link</a></h3>:
                    null}
                    {BlogLink?
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href={BlogLink}>Blog Link</a></h3>:
                    null}
                    {GithubLink?
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href={GithubLink}>Github Link</a></h3>:
                    null}
                    {APILink?
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href={APILink}>API Link</a></h3>:
                    null}
                </div>:
                null}
                {!techStack.length == 0?
                <div className = "sticky-note bg-cyan-300 w-72 h-72 flex content-start flex-wrap justify-center">
                    <h3 className = "h-12 mt-6 font-bold text-center w-full text-4xl">Tech Stack</h3>
                    <ul className = "ml-3 list-disc">
                        {techStackList}
                    </ul>
                </div>:
                null}
                {!libraries.length == 0?
                <div className = "sticky-note bg-lime-400 w-72 h-72 flex content-start flex-wrap justify-center">
                    <h3 className = "h-12 mt-6 font-bold text-center w-full text-4xl">Libraries</h3>
                    <ul className = "ml-3 list-disc">
                        {librariesList}
                    </ul>
                </div>:
                null}
            </div>

                    <div className = "sticky-note w-5/6 p-5 bg-white mb-6 flex flex-wrap jusify-center">
                        <div className = "pin-container flex justify-between w-full">
                            <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                            <h1 className = "m-5 text-center w-full text-6xl">{projectTitle}</h1>
                            <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                        </div>
                        <p>{description}</p>
                        <div className = "flex w-full justify-center">
                            <div className = "m-3 outer-shell w-32 h-12">
                                <div className = "mid-shell w-full h-full">
                                    <button className = "text-xl bg-white w-full h-full"><Link to={"/"}>Back Home</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Showcase;