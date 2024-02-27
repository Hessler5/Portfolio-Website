import React from "react";
import Carousel from "../Components/carousel";
import Project_Preview from "../Components/project_preview";

function Home() {
    return(
        <div>
            <div className ="flex content-center justify-center items-center h-screen">
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex content-center items-center">
                    <h1 className = "text-6xl text-center w-full">Welcome to my Portfolio</h1>
                </div>
            </div>
            <div className="flex w-full">
                <img className = "w-3/6" src="./src/assets/Headshot.JPG"/>
                <div className = "sticky-note flex flex-wrap w-3/4 h-1/4 content-center items-center bg-white 0 m-10">
                    <div className = "pin-container flex justify-between w-full">
                        <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                        <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                    </div>
                    <h2 className = "w-full text-center text-5xl">About Me</h2>
                    <p className = "w-full text-center m-4 text-xl">My name is Ethan Hessler and I am a recent graduate of the Flatiron Software Engineering Boot Camp. Prior to attending bootcamp I worked in retail as a buyer/planner/merchandiser. The things I liked most about my jobs in retail were the program/excel/system aspects of the job which is what led me to pursue programming. Whilst at Flatiron I learned the necessary technologies to create a full stack CRUD application. I created a total of five projects while in school which are all showcased on this site. I am currently looking for job opportunities in the programming space. I also have a section on this iste dedeictaed to some of the sewing projects I work on along side programming.</p>
                </div>
            </div>
            <Carousel />
            <div className = "flex flex-wrap content-center items-center justify-center">
                <div className = "w-full flex justify-center">
                    <div className = "sticky-note bg-yellow-200 w-72 h-72 flex content-center items-center mb-12">
                        <h1 className= "w-screen text-center text-6xl">Coding Projects</h1>
                    </div>
                </div>
                <Project_Preview projectName={"Pixel Harvester"} projectImg={"src/assets/Pixel_Harvester.png"} projectCopy={
                    "My phase 5 graduation project for the Flatiron School was a webscrapping site that used image processing to scrape images from other websites. I used selenium to progrmatically open and screen shot other websites. The Python pillow library to analyse the images. Flask to temporarily store the images and send them to the front end. The front end was built with React and Tailwind."
                } pageLink = "/pixel_harvester"/>
                <Project_Preview projectName={"Battle Memes"} projectImg={"src/assets/Battlememes.png"} projectCopy={
                    "The phase 4 project at the Flatiron School was a group project where we created a full stack application using React on the front end and Flask on the back end. The website allows you to post images with prompts for other users to caption. Once users have captioned your post you can select your favorite one and it will be dispalyed for everyone to see on the website."
                } pageLink = "/battlememes"/>
                <Project_Preview projectName={"Toy Tanks"} projectImg={"src/assets/Toy_Tanks.png"} projectCopy={
                    "For my phase 3 project I created a top down tank game in Python using the Pygame library. This game was inspired by the Wii Play Tanks game I played as a kid. The game features several types of enemies, bullet ricochet, lives and 5 levels of increasing difficulty."
                } pageLink = "/toy_tanks"/>
                <Project_Preview projectName={"CSS Color Selector"} projectImg={"src/assets/CSS_Color_Selector.png"} projectCopy={
                    "CSS Color Selector was created as the phase 2 group project for Flatiron School. The website allows you to create CSS color pallet the see in real time some website examples updateing below. You can also save color pallets to revisit at a later date. The project uses React for the front end and a DB-Json for as a server."
                } pageLink = "/css_color_selector"/>
                <Project_Preview projectName={"Exercise Generator"} projectImg={"src/assets/Exercise_Planner.png"} projectCopy={
                    "My first group project for the Flatiron School was an exercise generator that feeds from a public exercise API. We used React and vanilla CSS to create the front end. The site allows you to filter exercises and then save them to a workout plan at the bottom of the page. "
                } pageLink = "/exercise_generator"/>
            </div>
        </div>
    )
}

export default Home;