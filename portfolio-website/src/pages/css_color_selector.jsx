import React from "react";
import Showcase from "../Components/showcase";


function CssColorSelector() {
    return (
        <>
            <Showcase 
            videoSource={"src/assets/CSS_Color_Selector.mp4"}
            websiteLink={"https://color-pallets-website.onrender.com/"}
            BlogLink={"https://dev.to/hessler5/rgb-vs-hex-colors-3f1i"}
            GithubLink={"https://github.com/Hessler5/phase-2-project"}
            techStack={["HTML", "CSS", "JavaScript", "React"]}
            libraries={["db-json", "React Router", "React-Colorful"]}
            projectTitle={"CSS Color Selector"}
            description={'CSS Color Selector is a website created for phase 2 at the Flatiron School. The purpose of the website is to allow users to create and save custom css color palettes for their websites. Whilst creating the color paletts the user has the ability to see website components updating in real time with the pallet. The Pallet component allows you to input specific rgb or hex values as well as use the color selector to select colors. Once a pallet is creted it can be saved and then looked at or edited at a later date. Our team used a db-json for the server of this project.'}
            />
        </>
    )
}

export default CssColorSelector;