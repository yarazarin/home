import "./CyrcleBar.css";
import RoundedBTN from "./RoundedBTN";

export default function CircleBar() {
  return (
    <>
      <div className="rounded-container">
        <nav>
          <input className="rounded_t" type="checkbox" />
          <form for="rounded_t">
            <h3>Da!</h3>
          </form>
          <ul>
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
              <RoundedBTN title="Dear" goto="/DearDiary" />
            </li>
            <li className="rounded-childes">
              <RoundedBTN title="Calendar" goto="/GahNameh" />
            </li>
            <li className="rounded-childes">
              <RoundedBTN title="Soon!" goto="/HelpPage" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
