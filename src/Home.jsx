import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import UrHere from "./Components/UrHere/UrHere";
import Gap from "./Components/Gap/Gap";
import Updown from "./Components/UpDown/UpDown";
import Bubbles from "./Components/Bubbles/Bubbles";
import CircleBar from "./Components/CircleBar/CircleBar"
import "./Home.css"

const Home = () => {
  return (
    <div className="main-home">
      <UrHere pageName="Home_Demo_Website" />
      <NavBar />
      <CircleBar />
      <Updown />
      <Gap />
      <Gap />
      <Footer />
      <Bubbles />
    </div>
  );
};
export default Home;
