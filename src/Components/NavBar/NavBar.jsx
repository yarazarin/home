import NavBtn from "../NavBtn/NavBtn";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="navbar-buttons">
        <NavBtn title="Resume" goto="/Resume" />
        <NavBtn title="Gallery" goto="/Gallery" />
        <NavBtn title="Quizes" goto="/Quizes" />
        <NavBtn title="I-Chinh" goto="/Fortune" />
        <NavBtn title="Short Link" goto="/ShortenerLink" />
        <NavBtn title="Dear Diary!" goto="/DearDiary" />
        <NavBtn title="Persian Calendar" goto="/GahNameh" />
      </div>
    </div>
  );
};

export default NavBar;
