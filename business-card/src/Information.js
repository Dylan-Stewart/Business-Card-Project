import React from "react"
import Dylan from "../src/$photo-Dylan.png";
import tinylinkedinImage from "./$tinylinkedin.png";
import tinymessageImage from "./$tinymessage.png";

export default function Information() {

    const handleEmailClick = () => {
        window.location.href = "mailto:dylankstewart@gmail.com";
      };
    
      const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/dylans2002/", "_blank");
      };

    return (
        <div className="page">
                <a href="https://github.com/Dylan-Stewart" className="website-link" target="_blank" rel="noopener noreferrer">
                    Dylans' Github
                </a>
                <img src={tinylinkedinImage} alt="tiny linkedin logo" className="tinylinkedin" />
                <img src={tinymessageImage} alt="tiny message logo" className="tinymessage" />
            <div className="white-box">
                <h1> Dylan Stewart</h1>
                <h3> Frontend Developer </h3>
                <div className="button-container">
                    <button className="email-button" onClick={handleEmailClick}>Email</button>
                    <button className="linkedin-button" onClick={handleLinkedInClick}>LinkedIn</button>
                </div>
            </div>
            <img src={Dylan} className="Dylan" alt="Dylan!" />
        </div>)
}