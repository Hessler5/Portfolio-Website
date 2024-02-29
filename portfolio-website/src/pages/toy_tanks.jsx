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
            description={'Toy Tanks was my solo phase 3 project for Flatiron School. It is a top down tank shooter inspired by the Wii Play Tanks game I played as a kid. Toy Tanks uses the Pygame library which has a built in UI library and some basic built in functionality for sprites, collision, ect.. I created all of the art for the game using Krita. The game features 5 complete levels with varying enemy AI throughout each. There are two modes, one regular mode where you can take damage and get a game over and another invincibility mode. The levels also feature health pickups, bullet ricochet, and friendly fire. I am particularly proud of the enemies on level 5 which are quite tricky to beat. They shoot an array of invisible tracer bullets around themselves and when one of those bullets hits the player they shoot an actual bullet at that angle. This allows the enemy to make very clever bank shots and "see" the play around corners. The game can be downloaded and played at my GitHub link.'}
            />
        </>
    )
}

export default ToyTanks;