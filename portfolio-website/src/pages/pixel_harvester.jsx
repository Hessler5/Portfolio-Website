import React from "react";
import Showcase from "../Components/showcase";
import pixelHarvesterVid from "../assets/Pixel_Harvester.mp4";


function PixelHarvester() {
    return (
        <>
            <Showcase 
            videoSource={pixelHarvesterVid}
            GithubLink={"https://github.com/Hessler5/pixel_harvester2.0/tree/main"}
            BlogLink={"https://dev.to/hessler5/web-scraping-using-image-processing-49oe"}
            techStack={["HTML", "Tailwind", "JavaScript", "React", "Python", "Flask","Selenium", "Chrome Driver" ,"Pillow"]}
            libraries={["React Router", "flask-cors", "flask-bcrypt", "Faker", "SQLAlchemy", "JSZip", "file-saver"]}
            projectTitle={"Pixel Harvester"}
            description={'Pixel Harvester was my final project for the Flatiron School. This is a full stack website that allows users to scrape images from an inputted URL. The method of scrapping is not the traditional way of looping through an HTML tree or CSS selectors. Pixel Harvester uses image processing to take a screenshot of the webpage and then crop out sub images using that initial screen shot. To aid in the image processing I inject CSS rules into the page before selenium takes the screenshot. You can read more about this process in my blog. Once the images are processed they are sent to the front end and then deleted from the back end. The front end of Pixel Harvester allows you to sort through all of the returned images and select/rename the ones you want to download. When the user is ready they can simply hit download and they get a zip file with all of the images saved to their computer. This website also features full account creation, login, and authentication for when the page is refreshed. Users are limited to 3 scrapes a day and a user that is not logged in can get one free trial scrape.'}
            />
        </>
    )
}

export default PixelHarvester;