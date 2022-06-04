import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../css/socialFollow.css";
export default function SocialFollow() {
    return (
        <div className="social-container">
            <a
                href="https://www.linkedin.com/in/germ%C3%A1n-bonacchi-91b59a123/"
                className="linkedin social"
            >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a
                href="https://github.com/germanBonacchi"
                className="github social"
            >
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>

        </div>
    );
}
