import "./GahShomar.css";
import Clock from "react-live-clock";

const GahShomar = () => {
  let add_years = (date, n) => {
    return new Date(date.setFullYear(date.getFullYear() + n));
  };
  const date = new Date();
  add_years(date, 1180).toString();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return (
    <div className="gahhomar-container">
      <div className="gah-row">{date.toLocaleDateString("fa-IR", option)} باستانی </div>
      <Clock className="gah-row-clock" format={"HH:mm:ss"} ticking={true} />
    </div>
  );
};

export default GahShomar;
