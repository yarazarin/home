import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { QuizData } from "./QuizData";
import "./Quiz.css";

const Quiz = () => {
  const Input = () => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        console.log("do validate");
        event.preventDefault();
      }
    };
  };

  const survey = new Model(QuizData);
  return <Survey model={survey} className="quiz" />;
};

export default Quiz;
