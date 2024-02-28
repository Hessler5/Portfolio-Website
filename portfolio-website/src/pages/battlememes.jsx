import React from "react";
import Showcase from "../Components/showcase";


function BattleMemes() {
    return (
        <>
            <Showcase 
            videoSource={"src/assets/Battle_Memes.mp4"}
            GithubLink={"https://github.com/Hessler5/phase-4-project"}
            techStack={["HTML", "CSS", "JavaScript", "React", "Python", "Flask"]}
            libraries={["React Router", "flask-cors", "flask-bcrypt", "Faker", "SQLAlchemy"]}
            projectTitle={"Battle Memes"}
            description={'Battle Memes was the phase 4 full-stack group project for the Flatiron School. Our team set out to create a website that would act as a place where users could upload images to get them captioned by other users. The uploader could then pick there favorite caption and have it dispalyed on the website. All data fetched from the API is specific to the logged in user. Battle Memes is a complete log in system and with password encryption on the back end. The back end API is built using Flask and has three database models.'}
            />
        </>
    )
}

export default BattleMemes;