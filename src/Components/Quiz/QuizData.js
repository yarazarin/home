export const QuizData = {
  title: "Q u i z ! !",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 10000000,
  maxTimeToFinish: 30,
  firstPageIsStarted: true,
  startSurveyText: "I AM READY !!",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "Don't worry! <br>you have just 10 seconds for every question <br>Enter your Name:",
        },
        {
          type: "text",
          name: "username",
          titleLocation: "hidden",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "*",
          title: "2*2?",
          choices: ["6", "8", "i don't think about it ever", "4"],
          correctAnswer: "4",
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "+",
          title: "2+2?",
          choicesOrder: "random",
          choices: ["6", "66", "666", "4 again!"],
          correctAnswer: "4 again!",
        },
      ],
    },
    {
      elements: [
        {
          type: "-",
          name: "magnacarta",
          title: "8-4?",
          choicesOrder: "random",
          choices: ["4 haha!", "6", "7", "8"],
          correctAnswer: "4 haha!",
        },
      ],
    },
  ],
  completedHtml:
    "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [
    {
      expression: "{correctAnswers} == 0",
      html: "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>",
    },
    {
      expression: "{correctAnswers} == {questionCount}",
      html: "<h4>Congratulations! You answered all the questions correctly!</h4>",
    },
  ],
};
