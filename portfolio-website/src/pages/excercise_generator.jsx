import React from "react";
import Showcase from "../Components/showcase";


function ExerciseGenerator() {
    return (
        <>
            <Showcase 
            videoSource={"src/assets/Exercise_Generator.mp4"}
            websiteLink={"https://exercise-planner-lhcv.onrender.com/"}
            GithubLink={"https://github.com/Hessler5/phase-1-project"}
            APILink={"https://api-ninjas.com/api/exercises"}
            techStack={["HTML", "CSS", "JavaScript"]}
            projectTitle={"Exercise Generator"}
            description={'Exercise Generator was a two person group project completed for the Flatiron School. This was the first project we completed and it consists of a front end created with vanilla Javascript that hooks up to a public exercise API. The idea for the project came when both me and my group partner were complaining about our stale gym routines so we set out to create a website that would help generate new routines. The website allows you to filter through the results from the exercise API and it also offers pagination if there are more than 10 results. Once you find exercises you like you can save them to an exercise plan at the bottom of the page.'}
            />
        </>
    )
}

export default ExerciseGenerator;