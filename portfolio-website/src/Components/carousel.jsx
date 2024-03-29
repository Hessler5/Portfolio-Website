import React from "react";

function Carousel () {
    return (
        <div className = "flex content-center justify-center items-center h-screen flex-wrap">
            <h1 id="skills" className= "sticky-note w-72 h-72 flex content-center items-center text-6xl justify-center mb-6 bg-lime-400">Skills</h1>
            <div className = "carousel-container">
                <div className = "carousel">
                    <img id="html" src="https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg"/>
                    <img id="react" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"/>
                    <img id="tailwind" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png"/>
                    <img id="bootstrap" src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"/>
                    <img id="python" src="https://i.pinimg.com/736x/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.jpg"/>
                    <img id="flask" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png"/>
                    <img id="sql" className = "p-16" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"/>
                    <img id="git" className = "p-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Git-logo-orange.svg/640px-Git-logo-orange.svg.png"/>
                    <img id="html" src="https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg"/>
                    <img id="react" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"/>
                    <img id="tailwind" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png"/>
                    <img id="bootstrap" src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"/>
                    <img id="python" src="https://i.pinimg.com/736x/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.jpg"/>
                    <img id="flask" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png"/>
                    <img id="sql" className = "p-16" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"/>
                    <img id="git" className = "p-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Git-logo-orange.svg/640px-Git-logo-orange.svg.png"/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;