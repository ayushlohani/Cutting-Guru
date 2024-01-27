import React from "react";
import "./style.scss";
const Prices = () => {
  return (
    <div className="prices">
      <div className="left-sec">
        <img src="price.jpg" />
      </div>
      <div className="right-sec">
        <h1>Price List</h1>
        <h4>
          Our cheap prices gives you one more reason to visit our barber shop.
        </h4>
        <div className="list">
          <span>HairCut</span>
          <span>$20</span>
        </div>
        <div className="list">
          <span>Shave</span>
          <span>$10</span>
        </div>
        <div className="list">
          <span>Trim</span>
          <span>$20</span>
        </div>
        <div className="list">
          <span>Massage</span>
          <span>$40</span>
        </div>
        <div className="list">
          <span>Full Groom</span>
          <span>$50</span>
        </div>
        <div className="appointment">Make an Appointment</div>
      </div>
    </div>
  );
};

export default Prices;
