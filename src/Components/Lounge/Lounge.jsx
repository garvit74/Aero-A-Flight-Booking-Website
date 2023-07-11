import React from "react";
import image from "../../assets/window.jpg";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={image} />
        </div>
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help Through the Airport</span>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Help Through the Airport</span>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div className="singleGrid">
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
