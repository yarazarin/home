import { Link } from "react-router-dom";

const RoundedBTN = (props) => {
  return (
    <button>
      {
        <Link to={props.goto}>
          <h6>{props.title}</h6>
        </Link>
      }
    </button>
  );
};

export default RoundedBTN;