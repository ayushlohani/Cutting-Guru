import React from "react";
import "./style.scss";
const Team = () => {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="cards">
        <div className="card">
          <img src="b1.webp" />
          <h2>James Bond</h2>
          <h3>Barber</h3>
        </div>
        <div className="card">
          <img src="b2.jpg" />
          <h2>Sherlock Holmes</h2>
          <h3>Head Barber</h3>
        </div>
        <div className="card">
          <img src="b3.webp" />
          <h2>Harry Potter</h2>
          <h3>Barber</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
