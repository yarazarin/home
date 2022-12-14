import NavBtn from "../NavBtn/NavBtn";
import "./HamberMenu.css";
import { Link } from "react-router-dom";
const HamberMenu = () => {
  return (
    <section className="top-nav">
      <button className="top-nav-backtohome">
        <Link to="/">Back to Home</Link>
      </button>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>Contact</li>
        <li>SocialMedia</li>
        <li>Next</li>
      </ul>
    </section>
  );
};

export default HamberMenu;
