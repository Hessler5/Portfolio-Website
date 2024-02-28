import React from "react";
import Showcase from "../Components/showcase";


function ToyTanks() {
    return (
        <>
            <Showcase 
            videoSource={"src/assets/Toy_Tanks.mp4"}
            BlogLink={"https://dev.to/hessler5/tank-movement-in-pygame-l6h"}
            GithubLink={"https://github.com/Hessler5/Toys-Tanks"}
            techStack={["Python"]}
            libraries={["Pygame"]}
            projectTitle={"Toy Tanks"}
            description={'Toy Tanks was my solo phase 3 project for Flatiron School. It is a top down tank shooter inspired by the Wii Play Tanks game I played as a kid. Toy Tanks uses the Pygame library to which created al of the UI and had some basic built in funcitality for sprites, collion, ect. I created all of the art for the game using Krita\s free illustration software. The game fetaures 5 complete levels with verying enemy AI throughout each. There are two modes, one rgular mode where you can take damage and get a game over and another invincibility mode. The levels also feature health pickup, bullet ricochet, and friendly fire. I am particularly proud of the enemies on level 5 which are very hard to beat. The shoot an array of tracer bullets around themsleves and when one of those bullets hits the player they shoot and actual bullet at that angle. This allows the enemy to make very clever bank shots and "see" the play around corners.'}
            />
        </>
    )
}

export default ToyTanks;