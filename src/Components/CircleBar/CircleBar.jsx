import "./CyrcleBar.css";
import RoundedBTN from "./RoundedBTN";

export default function CircleBar() {
  return (
    <div className="circle-container">
      <div className="rounded-container">
        <input className="rounded_t" type="checkbox" id="BB" />
        <label
          for="BB"
          className="fa-solid fa-door-closed"
        ></label>
        <ul className="roundedul">
          <li className="rounded-childes">
            <RoundedBTN title="Resume" goto="/Resume" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Gallery" goto="/Gallery" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Quizes" goto="/Quizes" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="I-Chinh" goto="/Fortune" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Short" goto="/ShortenerLink" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Diary" goto="/DearDiary" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Calendar" goto="/GahNameh" />
          </li>
          <li className="rounded-childes">
            <RoundedBTN title="Abacus" goto="/Calculator" />
          </li>
        </ul>
      </div>
    </div>
  );
}
