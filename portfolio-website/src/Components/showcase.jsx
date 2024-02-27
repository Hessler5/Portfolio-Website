import React from "react";
import { Link } from "react-router-dom";


function Showcase() {
    return (
        <div className = "flex flex-wrap justify-center">
            <video className = "mt-5 w-5/6" controls>
                <source src="src/assets/Exercise_Generator.mp4" type="video/mp4"/>
            </video>
            <div className = "my-5 flex justify-evenly w-screen">
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex flex-wrap content-center items-center">
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href="https://exercise-planner-lhcv.onrender.com/">Website Link</a></h3>
                    <h3 className="w-full text-center my-8 text-4xl underline"><a href="https://exercise-planner-lhcv.onrender.com/">Blog Link</a></h3>
                </div>
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex content-start flex-wrap justify-center">
                    <h3 className = "h-12 mt-6 font-bold text-center w-full text-4xl">Tech Stack</h3>
                    <ul className = "ml-3 list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex content-start flex-wrap justify-center">
                    <h3 className = "h-12 mt-6 font-bold text-center w-full text-4xl">Libraries</h3>
                    <ul className = "ml-3 list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>

                    <div className = "w-5/6 p-5 bg-white mb-6 flex flex-wrap jusify-center">
                        <div className = "pin-container flex justify-between w-full">
                            <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                            <h1 className = "m-5 text-center w-full text-6xl">Exercise Generator</h1>
                            <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                        </div>
                        <p>Exercise Generator was a two person group project completed for the Flatiron School. This was the first project we completed and it consits of a front end created in vanilla Javascript that hooks up to a public exercise api. The idea for the project came when both me and my group partner were complaining about our stale gym routines so we set out to create a website that would help generate new routines. The website allows you to filter through the results from the exercise API and it also offers pagination if there are more than 10 results. Once you find exercises you like you can save then to an exersice plan at the bottom of the page.</p>
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