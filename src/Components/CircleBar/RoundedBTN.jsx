import { Link } from "react-router-dom";

const RoundedBTN = ({goto,title}) => {
  return (
    <button>
      {
        <Link to={goto}>
          <h6>{title}</h6>
        </Link>
      }
    </button>
  );
};

export default RoundedBTN;