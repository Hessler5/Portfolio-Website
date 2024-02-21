import React from "react";

function Home() {
    return(
        <div>
            <h1 className = "text-gray-500">Welcome</h1>
            <div className="flex">
                <img className = "w-1/4" src="./src/assets/IMG_1567.JPG"/>
                <div className = "flex flex-wrap w-3/4 content-center items-center">
                    <h2 className = "w-full text-center">About Me</h2>
                    <p className = "w-full text-center m-4">My name is Ethan Hessler and I am a recent graduate of the Flatiron Software Engineering Boot Camp. Prior to attending bootcamp I worked in retail as a buyer/planner/merchandiser. The things I liked most about my jobs in retail were the program/excel/system aspects of the job which is what led me to pursue programming. Whilst at Flatiron I learned the necessary technologies to create a full stack CRUD application. I created a total of five projects while in school which are all showcased on this site. I am currently looking for job opportunities in the programming space. I also have a section on this iste dedeictaed to some of the sewing projects I work on along side programming.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;