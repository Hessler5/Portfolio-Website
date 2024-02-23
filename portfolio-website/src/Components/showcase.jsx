import React from "react";


function Showcase() {
    return (
        <div className = "flex flex-wrap justify-center">
            <video className = "mt-5 w-5/6" controls>
                <source src="src/assets/Exercise_Generator.mp4" type="video/mp4"/>
            </video>
            <div className = "my-5 flex justify-evenly w-screen">
                <div className = "flex flex-wrap p-3 rounded-lg bg-gray-300 font-bold content-between">
                    <h3 className="w-full text-center my-5"><a href="https://exercise-planner-lhcv.onrender.com/">Website Link</a></h3>
                    <h3 className="w-full text-center my-5"><a href="https://exercise-planner-lhcv.onrender.com/">Blog Link</a></h3>
                </div>
                <div className = "p-5 rounded-lg bg-gray-300">
                    <h3 className = "font-bold text-left">Tech Stack</h3>
                    <ul className = "ml-3 list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className = "p-5 rounded-lg bg-gray-300">
                    <h3 className = "font-bold text-left">Libraries Used</h3>
                    <ul className = "ml-3 list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className = "p-5 rounded-lg bg-gray-300">
                    <h3 className = "font-bold text-left">API</h3>
                    <ul className = "ml-3 list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>
            <div className = "w-5/6 p-5 rounded-lg bg-gray-300">
                <p>Exercise Generator was a two person group project completed for the Flatiron School. This was the first project we completed and it consits of a front end created in vanilla Javascript that hooks up to a public exercise api. The idea for the project came when both me and my group partner were complaining about our stale gym routines so we set out to create a website that would help generate new routines. The website allows you to filter through the results from the exercise API and it also offers pagination if there are more than 10 results. Once you find exercises you like you can save then to an exersice plan at the bottom of the page.</p>
            </div>
            <button className = "w-full">Home</button>
        </div>
    )
}

export default Showcase;