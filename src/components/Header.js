import React from "react";
import Typed from "react-typed";
import pic from "../pic.jpg";
const Header = () => {
  return (
    <div className="head-wrapper">
      <div className="main-info ">
        <div className="main-info-left">
          <h1>Hello...</h1>
          <h2>My name is Sohan Bandary</h2>
          <h3>Student at IIIT Gwalior</h3>
          <span className="h3 color-font">and a </span>
          <Typed
            className="typed-text"
            strings={["Web Developer", "Gamer", "Graphic Designer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <div className="contact-me-div">
            <a href="#" className="btn-main-offer">
              Contact Me
            </a>
          </div>
        </div>
        <div className="main-info-right">
          <img src={pic} alt="profilepic" className="profilepic" />
        </div>
      </div>
    </div>
  );
};

export default Header;
