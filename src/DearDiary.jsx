import SaveText from "./Components/SaveText/SaveText";
import BackToHomeBTN from "./Components/BackToHomeBTN/BackToHomeBTN";
import Gap from "./Components/Gap/Gap";
import UrHere from "./Components/UrHere/UrHere";
import Footer from "./Components/Footer/Footer";
const DearDiary = () => {
  return (
    <div>
      <BackToHomeBTN />
      <UrHere pageName="Diary_Demo_Website" />
      <SaveText />
      <Gap />
      <Gap />
      <Footer />
    </div>
  );
};

export default DearDiary;
