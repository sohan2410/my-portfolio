import React from "react";
import GitHubCalendar from "react-github-calendar";
const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-info">
        <div className=" text-center pb-5">
          <h1>
            <span className=" border-bottom border-white color-font">
              About Me
            </span>
          </h1>
        </div>
        <p className="color-font-white h3">
          I'm Second year student pursuing Information Technology from the
          Indian Institute of Information Technology, Gwalior.
        </p>
        <p className="color-font-white h3">
          I'm a MERN Stack Developer with a passion of Backend Development in
          NodeJs
        </p>
        <p className="color-font-white h3">
          Currently, I'm building a Social e-commerce website for{" "}
          <a href="https://sarvh.com/">Sarvh</a>
        </p>
        <GitHubCalendar
          username="sohan2410"
          // hideTotalCount
          // hideColorLegend
          year={new Date().getFullYear()}
          className="githubcalendar"
          style={{ paddingTop: "3rem" }}
        />
        <p className="color-font-white h3">
          My contribution on <a href="https://github.com/sohan2410">GitHub</a>{" "}
          over a year
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
