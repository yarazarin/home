import Gap from "./Components/Gap/Gap";
import UrHere from "./Components/UrHere/UrHere";
import Footer from "./Components/Footer/Footer";
import Iching from "./Components/Iching/Iching";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";

const Fortune = () => {
  return (
    <>
      <BackToHomeBTN />
      <UrHere pageName="Fortune_Demo_Website" />
      <Iching />
      <Gap />
      <Gap />
      <Footer />
    </>
  );
};

export default Fortune;
