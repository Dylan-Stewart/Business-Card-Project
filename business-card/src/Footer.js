import React from "react"
import twitterImage from "./$twitter.png";
import instagramImage from "./$instagram.png";
import githubImage from "./$github.png";
import facebookImage from "./$facebook.png";

export default function Footer () {
return(
    <nav className = "navbar">
        <img src= {twitterImage} alt="twitter logo" className="twitter" />
        <img src= {facebookImage} alt="facebook logo" className="facebook" />
        <img src= {instagramImage} alt="instagram logo" className="instagram" />
        <img src= {githubImage} alt="github logo" className="github" />
    </nav>
)
}