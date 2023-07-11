import React from "react";
import image1 from "../../assets/window.jpg";
import image2 from "../../assets/america.jpg";
import image3 from "../../assets/paris.jpg";
import image4 from "../../assets/spain.jpg";

const travellers = [
  {
    id: 1,
    destinationImage: image1,
    travellersName: "Garvit",
    travellersImage: image2,
    socialLink: "@Garvit",
  },
  {
    id: 2,
    destinationImage: image2,
    travellersName: "Garvit",
    travellersImage: image2,
    socialLink: "@Garvit",
  },
  {
    id: 3,
    destinationImage: image3,
    travellersImage: image2,
    travellersName: "Garvit",
    socialLink: "@Garvit",
  },
  {
    id: 4,
    destinationImage: image4,
    travellersImage: image2,
    travellersName: "Garvit",
    socialLink: "@Garvit",
  },
];

const Travellers = () => {
  return (
    <div className="travellers container section">
      <div className="sectionContainer">
        <h2>Top Travellers of the month</h2>

        <div className="travellersContainer grid">
          {travellers.map(({id, destinationImage, travellersName, travellersImage, socialLink}) => {
            return (
              <div key={id} className="singleTraveller">
                <img src={destinationImage} alt="" className="destinationImage" />
                <div className="travellerDetails">
                  <div className="travellerpic">
                    <img src={travellersImage} className="travellerImage" />
                  </div>
                  <div className="travellerName">
                    <span>{travellersName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travellers;
