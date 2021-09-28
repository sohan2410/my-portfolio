import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Projects = () => {
  const linkize = [
    "https://github.com/sohan2410/linkize-social-media-application/blob/main/assets/images/landing_page1.jpeg?raw=true",
    "https://github.com/sohan2410/linkize-social-media-application/raw/main/assets/images/landing_page2.jpeg",
    "https://github.com/sohan2410/linkize-social-media-application/raw/main/assets/images/signin1.jpeg",
  ];

  return (
    <div style={{ height: "100vh" }}>
      <div className=" text-center pb-5">
        <h1>
          <span className=" border-bottom border-white color-font">
            Projects
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="container-body">
          <div className="h1 color-font-white">
            Linkize : Social Media Application
          </div>
          <p className=" color-font-white">
            Social media application using html, css, js, nodejs with features
            like basic authentication, google and facebook authentication, post
            uploading, like and deleting posts.
          </p>
        </div>
        <div className="container-body">
          <Carousel>
            {linkize.map(item => (
              <Carousel.Item>
                <img src={item} alt="caraoselimage" className="image" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
