import React from "react";

import "./About.css";

const About = () => {
    return (
        <div className="about">
            This is a simple frontend SPA on React.js.
            <a
                className="about__link"
                href="https://github.com/Pro100CaHya/postly"
                target="_blank"
                rel="noopener noreferrer"
            > Repo
            </a>
        </div>
    );
};

export default About;