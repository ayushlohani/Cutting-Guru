import React from "react";
import "./style.scss";
const Service = () => {
  return (
    <div className="Service" id="services">
      <div className="mid">
        <h1>Our Services</h1>
        <div className="all">
          <div className="cards">
            <div className="card">
              <img src="4.png" />
              <div className="text">
                <h2>HairCutting</h2>
                <h5>Get the best haircut in your life made by our barbers.</h5>
                <div className="read-more">Read More</div>
              </div>
            </div>
            <div className="card">
              <img src="2.png" />
              <div className="text">
                <h2>Shaving</h2>
                <h5>We are going to shave your with a grandpa’s method.</h5>
                <div className="read-more">Read More</div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src="3.png" />
              <div className="text">
                <h2>Styling</h2>
                <h5>Need a new haircut styling? Welcome to our barbershop.</h5>
                <div className="read-more">Read More</div>
              </div>
            </div>
            <div className="card">
              <img src="1.png" />
              <div className="text">
                <h2>Trimming</h2>
                <h5>Cutting hair on your face according to your length.</h5>
                <div className="read-more">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
