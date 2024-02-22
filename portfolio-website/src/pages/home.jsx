import React from "react";
import Carousel from "../Components/carousel";
import Project_Preview from "../Components/project_prview";

function Home() {
    return(
        <div>
            <div className ="flex content-center items-center h-screen">
                <h1 className = "text-6xl text-center w-full">Welcome to my Portfolio</h1>
            </div>
            <div className="flex w-full">
                <img className = "w-3/6" src="./src/assets/IMG_1567.JPG"/>
                <div className = "flex flex-wrap w-3/4 content-center items-center">
                    <h2 className = "w-full text-center">About Me</h2>
                    <p className = "w-full text-center m-4">My name is Ethan Hessler and I am a recent graduate of the Flatiron Software Engineering Boot Camp. Prior to attending bootcamp I worked in retail as a buyer/planner/merchandiser. The things I liked most about my jobs in retail were the program/excel/system aspects of the job which is what led me to pursue programming. Whilst at Flatiron I learned the necessary technologies to create a full stack CRUD application. I created a total of five projects while in school which are all showcased on this site. I am currently looking for job opportunities in the programming space. I also have a section on this iste dedeictaed to some of the sewing projects I work on along side programming.</p>
                </div>
            </div>
            <h1>Skills</h1>
            <Carousel />
            <Project_Preview projectName={"Pixel Harvester"} projectImg={"src/assets/Pixel_Harvester.png"} projectCopy={
                "My phase 5 graduation project for the Flatiron School was a webscrapping site that used image processing to scrape images from other websites. I used selenium to progrmatically open and screen shot other websites. The Python pillow library to analyse the images. Flask to temporarily store the images and send them to the front end. The front end was built with React and Tailwind."
            }/>
        </div>
    )
}

export default Home;