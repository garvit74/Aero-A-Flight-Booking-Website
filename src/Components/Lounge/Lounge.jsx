import React, { useEffect } from "react";

import image from "../../assets/window.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
          <img src={image} />
        </div>
        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="2500">
            Unaccompanied Minor Lounge
          </h2>

          <div className="grids grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Help Through the Airport</span>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Help Through the Airport</span>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Help Through the Airport</span>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
