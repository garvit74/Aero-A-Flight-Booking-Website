import React, { useEffect } from "react";
import video from "../../assets/video.mp4";
import plane from "../../assets/Ving.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //useEffect to set animation duration

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting memories with us
        </h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        className="flex homeImages"
      >
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={plane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
