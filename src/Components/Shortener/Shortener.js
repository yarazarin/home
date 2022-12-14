import { useState } from 'react';
import './Shortener.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function Shortener() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="shortener-container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default Shortener;
