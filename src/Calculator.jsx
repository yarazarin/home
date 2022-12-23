import BlueCalculator from "./Components/BlueCalculator/BlueCalculator";
import Gap from "./Components/Gap/Gap";
import UrHere from "./Components/UrHere/UrHere";
import Footer from "./Components/Footer/Footer";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";

const Calculator = () => {
  return (
    <div>
      <BackToHomeBTN/>
      <UrHere pageName="Calculator_Demo_Website" />
      <BlueCalculator />
      <Gap />
      <Footer />
    </div>
  );
};

export default Calculator;
