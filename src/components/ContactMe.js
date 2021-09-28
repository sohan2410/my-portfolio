import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";

import envelope from "./envelope.svg";
const ContactMe = () => {
  return (
    <div>
      <div className=" text-center pb-5">
        <h1>
          <span className=" border-bottom border-white color-font">
            Contact Me
          </span>
        </h1>
        <div className="icons">
          <a href="https://www.facebook.com/sonu2410/">
            <FontAwesomeIcon icon={faFacebook} size={"3x"} />
          </a>
          <a href="https://github.com/sohan2410">
            <FontAwesomeIcon icon={faGithub} size={"3x"} />
          </a>
          <a href="https://www.linkedin.com/in/sohan-bandary/">
            <FontAwesomeIcon icon={faLinkedinIn} size={"3x"} />
          </a>
          <a href="https://www.instagram.com/sohan24.py/">
            <FontAwesomeIcon icon={faInstagram} size={"3x"} />
          </a>
          <a href="mailto:bandarysohan24@gmail.com">
            <i class="far fa-envelope fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
