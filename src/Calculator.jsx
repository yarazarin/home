import SimpleCalculator from "./Components/Calculator/SimpleCalculator";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Gap from "./Components/Gap/Gap";
import UrHere from "./Components/UrHere/UrHere";
import Footer from "./Components/Footer/Footer";

const Calculator = () => {
  return (
    <>
      <BackToHomeBTN />
      <UrHere pageName="Diary_Demo_Website" />
      <SimpleCalculator />
      <Gap/>
      <Gap/>
      <Footer />
    </>
  );
};

export default Calculator;
