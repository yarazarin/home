import Footer from "./Components/Footer/Footer";
import UrHere from "./Components/UrHere/UrHere";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Quiz from "./Components/Quiz/Quiz";

const Quizes = () => {
  return (
    <div>
      <BackToHomeBTN />
      <UrHere pageName="Quiz_Demo_Website" />
      <Quiz />
      <reload />
      <Footer />
    </div>
  );
};

export default Quizes;
