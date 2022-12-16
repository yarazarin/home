import "./HamberMenu.css";
import { Link } from "react-router-dom";

const HamberMenu = ({products}) => {

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
        <li>
          <Link to="/HelpPage">Contact Me</Link>
        </li>
        <li>
          <Link to="/HelpPage">Social Media</Link>
        </li>
        <li>
          <Link to="/HelpPage">Help</Link>
        </li>
      </ul>
    </section>
  );
};

export default HamberMenu;
