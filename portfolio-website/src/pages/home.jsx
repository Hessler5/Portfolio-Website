import React, {useState} from "react";
import Carousel from "../Components/carousel";
import Project_Preview from "../Components/project_preview";
import PersonalProject from "../Components/personal_projects";
import pixelHarvesterImg from "../assets/Pixel_Harvester.png";
import battleMemesImg from "../assets/Battlememes.png"
import toyTankImg from "../assets/Toy_Tanks.png";
import cssSelectorImg from "../assets/CSS_Color_Selector.png";
import exerciseGeneratorImg from "../assets/Exercise_Planner.png"

function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenu() {
        setMenuOpen(!menuOpen)
    }

    return(
        <div>
            {menuOpen?
            <div className = "z-10 fixed right-3 top-3 outer-shell w-48">
                <div className = "mid-shell w-full h-full">
                    <div className = "text-center underline text-xl bg-white w-full h-full p-3">
                        <button className = "absolute no-underline right-4 top-3" onClick={handleMenu}>X</button>
                        <h5><a href="#about">About</a></h5>
                        <h5><a href="#skills">skills</a></h5>
                        <h5><a href="#coding-projects">Coding Projects</a></h5>
                        <h5><a href="#personal-projects">Personal Projects</a></h5>
                    </div>
                </div>
            </div>
            : 
            <div className = "z-10 fixed right-3 top-3 outer-shell w-28 h-14">
                <div className = "mid-shell w-full h-full">
                    <button className = "text-xl bg-white w-full h-full" onClick={handleMenu}>Menu</button>
                </div>
            </div>}
            <div className ="flex content-center justify-center items-center h-screen">
                <div className = "sticky-note bg-yellow-200 w-72 h-72 flex content-center items-center">
                    <h1 className = "text-6xl text-center w-full">Welcome to my Portfolio</h1>
                </div>
            </div>
            <div id="about" className="flex max-[480px]:flex-wrap w-full items-center">
                <img className = "w-3/6 max-[480px]:w-screen" src="./src/assets/Headshot.JPG"/>
                <div className = "sticky-note flex flex-wrap w-3/4 h-1/4 content-center items-center bg-white 0 m-10 max-[480px]:w-screen">
                    <div className = "pin-container flex justify-between w-full">
                        <div className = "pin-surround"><div className = "outer-left-pin"><div className = "inner-left-pin"></div></div></div>
                        <div className = "pin-surround"><div className = "outer-right-pin"><div className = "inner-right-pin"></div></div></div>
                    </div>
                    <h2 className = "w-full text-center text-5xl">About Me</h2>
                    <p className = "w-full text-center m-4 text-xl">My name is Ethan Hessler and I am a recent graduate of the Flatiron Software Engineering Boot Camp. Prior to attending boot camp I worked in retail as a buyer/planner/merchandiser. The things I liked most about my jobs in retail were the program/excel/system aspects of the job which is what led me to pursue programming. Whilst at Flatiron I learned the necessary technologies to create a full stack CRUD application. I created a total of five projects while in school which are all showcased on this site. I also have a section on this site dedicated to some of the sewing projects I work on alongside programming. Currently I am looking for any job opportunities in the programming space.</p>
                </div>
            </div>
            <Carousel />
            <div className = "flex flex-wrap content-center items-center justify-center">
                <div className = "w-full flex justify-center">
                    <div className = "sticky-note bg-cyan-300 w-72 h-72 flex content-center items-center mb-12">
                        <h1 id="coding-projects" className= "w-screen text-center text-6xl">Coding Projects</h1>
                    </div>
                </div>
                <Project_Preview projectName={"Pixel Harvester"} projectImg={pixelHarvesterImg} projectCopy={
                    "My phase 5 graduation project for the Flatiron School was a web scraping site that used image processing to scrape images from other websites. I used Selenium to programmatically open and screen shot other websites. The Python Pillow library to analyze the images. Flask to temporarily store the images and send them to the front end. The front end was built with React and Tailwind."
                } pageLink = "/pixel_harvester"/>
                <Project_Preview projectName={"Battle Memes"} projectImg={battleMemesImg} projectCopy={
                    "The phase 4 project at the Flatiron School was a group project where we created a full stack application using React on the front end and Flask on the back end. The website allows you to post images with prompts for other users to caption. Once users have captioned your post you can select your favorite one and it will be displayed for everyone to see on the website."
                } pageLink = "/battlememes"/>
                <Project_Preview projectName={"Toy Tanks"} projectImg={toyTankImg} projectCopy={
                    "For my phase 3 project I created a top down tank game in Python using the Pygame library. This game was inspired by the Wii Play Tanks game I played as a kid. The game features several types of enemies, bullet ricochet, lives and 5 levels of increasing difficulty."
                } pageLink = "/toy_tanks"/>
                <Project_Preview projectName={"CSS Color Selector"} projectImg={cssSelectorImg} projectCopy={
                    "CSS Color Selector was created as the phase 2 group project for the Flatiron School. The website allows you to create CSS color pallets and see in real time website component examples updating. You can also save color pallets to revisit at a later date. The project uses React for the front end and a db-json for as a server."
                } pageLink = "/css_color_selector"/>
                <Project_Preview projectName={"Exercise Generator"} projectImg={exerciseGeneratorImg} projectCopy={
                    "My first group project for the Flatiron School was an exercise generator that feeds from a public exercise API. We used React and vanilla CSS to create the front end. The site allows you to filter exercises and then save them to a workout plan at the bottom of the page."
                } pageLink = "/exercise_generator"/>
            </div>
            <div id="personal-projects" className = "flex flex-wrap content-center items-center justify-center">
                <div className = "w-full flex justify-center">
                    <div className = "sticky-note bg-pink-400 w-72 h-72 flex content-center items-center mb-12">
                        <h1 id="coding-projects" className= "w-screen text-center text-6xl">Personal Projects</h1>
                    </div>
                </div>
            </div>
            <PersonalProject 
            projectTitle={"Scrap Denim Pants"}
            description={"Here is a pair of jeans I created from excess scrap left over from other projects."}
            img1={"src/assets/Denim_Pants_1.jpg"}
            img2={"src/assets/Denim_Pants_2.jpg"}
            img3={"src/assets/Denim_Pants_3.jpg"}
            />
            <PersonalProject 
            projectTitle={"Sewing Class"}
            description={"Here is a pair of jeans I created from excess scrap left over from other projects."}
            img1={"src/assets/Sewing_Class_1.JPG"}
            img2={"src/assets/Sewing_Class_2.JPG"}
            img3={"src/assets/Sewing_Class_3.JPG"}
            />
            <PersonalProject 
            projectTitle={"Sock Pillows!"}
            description={"Using excess sample socks at my previous job I fashioned pillows by cutting up and then re-sewing them together."}
            img1={"src/assets/Sock_Pillows_2.JPG"}
            img2={"src/assets/Sock_Pillows_1.JPG"}
            img3={"src/assets/Sock_Pillows_3.JPG"}
            />
        </div>
    )
}

export default Home;