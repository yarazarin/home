import "./NavHover.css"
import { Link } from "react-router-dom";
const NavHover = () => {
  return (
      <nav className="nav-hover">
        <ul>
          <li>
            <Link to="#">Contact</Link>
            <ul>
              <li>
                <Link to="#">Email</Link>
              </li>
              <li>
                <Link to="#">Telegram</Link>
              </li>
              <li>
                <Link to="#">whatsapp</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">Social</Link>
            <ul>
              <li>
                <Link to="#">twitter</Link>
              </li>
              <li>
                <Link to="#">linkdin</Link>
              </li>
              <li>
                <Link to="#">instagram</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">Next...</Link>
            <ul>
              <li>
                <Link to="#">Gallery</Link>
              </li>
              <li>
                <Link to="#">teach</Link>
              </li>
              <li>
                <Link to="#">Article</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  );
};

export default NavHover;
