import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import UrHere from "./Components/UrHere/UrHere";
import Updown from "./Components/UpDown/UpDown";
import Bubbles from "./Components/Bubbles/Bubbles";
import CircleBar from "./Components/CircleBar/CircleBar"
import "./Home.css"

const Home = () => {
  return (
    <div className="main-home">
      <UrHere pageName="Home_Demo" />
      <NavBar />
      <CircleBar />
      <Updown />
      <Footer />
      {/* <Bubbles /> */}
    </div>
  );
};
export default Home;
