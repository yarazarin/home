import "./BackToHomeBTN.css";
import water from "./water.gif";
import { Link } from "react-router-dom";
const BackToHomeBTN = () => {
  return (
    <div className="bth-con">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="highContrastGraphic"
            />
            <feComposite
              in="SourceGraphic"
              in2="highContrastGraphic"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
      <Link to="/">
        <button id="gooey-button">
          Back To Home
          <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
          </span>
        </button>
      </Link>
      <img id="water-d" src={water}></img>
    </div>
  );
};

export default BackToHomeBTN;
