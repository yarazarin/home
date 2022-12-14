import React from "react";
import doll from "./Assets/img/doll.jpg";
import NavBtn from "./Components/NavBtn/NavBtn";
import Footer from "./Components/Footer/Footer";
import "./Resume.css";
import UrHere from "./Components/UrHere/UrHere";
import NavHover from "./Components/NavHover/NavHover";
import HamberMenu from "./Components/HamberMenu/HamberMenu";
import Gap from "./Components/Gap/Gap";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";

const Resume = () => {
  return (
    <div className="resume-main">
      <div className="resume-hamber">
        <HamberMenu />
      </div>
      <div className="resume-btn">
      <BackToHomeBTN goto="/" />
      </div>
      <Gap />
      <UrHere pageName="Resume_Demo_Website" />
      <div className="resume-container">
        <NavHover />
        <div className="name-resume">
          <h1>Yara Zarin</h1>
          <p className="quote-work">
            <b>
              Choose A Job You Love, And You Will Never Have To Work A Day In
              Your Life.
            </b>
          </p>
        </div>
        <div className="circles">
          <img className="my-img" src={doll} alt="" />
          <div className="circle-one">Resume</div>
          <div className="circle-two">Skils</div>
          <div className="circle-three">Works</div>
        </div>
      </div>
      <Gap />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
