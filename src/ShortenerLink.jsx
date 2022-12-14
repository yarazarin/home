import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Footer from "./Components/Footer/Footer";
import Shortener from "./Components/Shortener/Shortener";
import UrHere from "./Components/UrHere/UrHere";

const ShortenerLink = () => {
  return (
    <>
      <UrHere pageName="Shortener_Demo_Website" />
      <BackToHomeBTN />
      <Shortener />
      <Footer />
    </>
  );
};

export default ShortenerLink;
