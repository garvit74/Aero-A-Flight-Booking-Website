import React, { useEffect } from "react";
import logo from "../../assets/aeroplane.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer container grid"
      >
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Explore">Explore</a>
          </li>
          <li>
            <a href="Flight Status">Flight Status</a>
          </li>
          <li>
            <a href="Travel">Travel</a>
          </li>
          <li>
            <a href="Check-In">Check-In</a>
          </li>
          <li>
            <a href="Check-Out">Check-Out</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="Home">FAQ</a>
          </li>
          <li>
            <a href="Explore">How To</a>
          </li>
          <li>
            <a href="Flight Status">Features</a>
          </li>
          <li>
            <a href="Travel">Baggage</a>
          </li>
          <li>
            <a href="Check-In">Route-Map</a>
          </li>
          <li>
            <a href="Check-Out">Our Communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="Home">Chauffuer</a>
          </li>
          <li>
            <a href="Explore">Our Partners</a>
          </li>
          <li>
            <a href="Flight Status">Destination</a>
          </li>
          <li>
            <a href="Travel">Careers</a>
          </li>
          <li>
            <a href="Check-In">Transportation</a>
          </li>
          <li>
            <a href="Check-Out">Program Rules</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Design By{" "}
          <a href="https://www.github.com/Garvit74" target="__blank">
            Garvit
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
