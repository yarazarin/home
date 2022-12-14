import "./NavBtn.css"
import { Link } from "react-router-dom";
const NavBtn = (props) => {
  return (
    <button className="btn">
      {
        <Link to={props.goto}>
          <h6>{props.title}</h6>
        </Link>
      }
    </button>
  );
};

export default NavBtn;
