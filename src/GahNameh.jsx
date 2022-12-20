import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Footer from "./Components/Footer/Footer";
import GahShomar from "./Components/GahShomar/GahShomar";
import UrHere from "./Components/UrHere/UrHere";

const GahNameh = () => {
  return (
    <div className="gah-n">
      <BackToHomeBTN />
      <UrHere pageName="Ancient_Persian_Calendar_Demo_Website" />
      <GahShomar />
      <Footer />
    </div>
  );
};

export default GahNameh;
