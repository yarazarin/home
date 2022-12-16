import Footer from "./Components/Footer/Footer";
import UrHere from "./Components/UrHere/UrHere";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Quiz from "./Components/Quiz/Quiz";

const Quizes = () => {
  let refreshPage = () => {
    location.reload();
  };
  return (
    <div>
      <BackToHomeBTN />
      <UrHere pageName="Quiz_Demo_Website" />
      <Quiz />
      <div className="redresh_div">
        {" "}
        <button className="refresh_btn" onClick={refreshPage}>
          Refresh page
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Quizes;
