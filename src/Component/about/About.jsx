import React from "react";
import "./style.scss";
const About = () => {
  return (
    <div className="about">
      <div className="mid-sec">
        <div className="left-sec">
          <img src="about.jpg" alt="..." />
        </div>
        <div className="right-sec">
          <h1>
            Good barbers, like good friends, are hard to find… but not
            impossible.
          </h1>
          <h5>
            Cutting Guru is an amazing barbershop located in the heart of the
            Upper West Side Manhattan.
          </h5>
          <div className="read-more">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default About;
