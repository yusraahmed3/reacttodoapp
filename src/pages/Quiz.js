import React from "react";
import { useState } from "react";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswerIdx } = questions[currentQuestion];

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const onChoiceClick = (index) => {
    setSelectedChoice(index);
    if (index === correctAnswerIdx) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  return (
    <div className="h-screen w-full flex flex-col justify-evenly items-center p-20">
      <div>
        <span>{currentQuestion + 1}</span>/<span>{questions.length}</span>
      </div>
      <div>
        <div className="text-2xl font-bold mb-5">{question}</div>
        <div className="flex flex-col gap-4">
          {choices.map((choice, index) => {
            return (
              <li
                onClick={() => onChoiceClick(index)}
                key={choice}
                className={`list-none ${
                  selectedChoice === index &&
                  (isCorrect ? "bg-green-600" : "bg-red-600")
                }
                text-center border border-cyan-800 w-full p-2 rounded-full hover:bg-cyan-800 hover:text-white hover:cursor-pointer`}
              >
                {choice}
              </li>
            );
          })}
        </div>
      </div>
      <button
        disabled={selectedChoice === null}
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
        className="border border-cyan-800 w-20 rounded-full"
      >
        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
