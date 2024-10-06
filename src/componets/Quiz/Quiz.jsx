import React, { useRef, useState, useEffect } from 'react';
import './Quiz.css';
import { data } from '../../assets/Data';
import Eligible from '../Eligible/Eligible';
import NotEligible from '../NotEligible/NotEligible';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [isQuizCompleted, setIsQuizCompleted] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionArray = [option1, option2, option3, option4];

  // Check if the user has already completed the quiz
  useEffect(() => {
    const completed = localStorage.getItem('quizCompleted');
    if (completed) {
      setIsQuizCompleted(true);
    }
  }, []);

  const checkAnswer = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        // optionArray[question.ans - 1].current.classList.add('correct');
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);

        // Save to localStorage when quiz is completed
        localStorage.setItem('quizCompleted', 'true');
        return;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
        return null;
      });
    }
  };

  return (
    <div className='container'>
      <h1>MasterFrosty Quiz</h1>
      <hr />

      {isQuizCompleted ? (
        // If the user has already completed the quiz
        <div className='completed'>
          <h2>You have already completed the quiz!</h2>
          <button className='eligible-btn'>
    <a href="https://www.masterfrosty.com" target='_blank' rel='noopener noreferrer'>Visit Our Website</a>
    </button>
        </div>
      ) : (
        <>
          {result ? (
            <></>
          ) : (
            <>
              <h2>
                {index + 1}. {question.question}
              </h2>

              <ul>
                <li ref={option1} onClick={(e) => checkAnswer(e, 1)}>
                  {question.option1}
                </li>
                <li ref={option2} onClick={(e) => checkAnswer(e, 2)}>
                  {question.option2}
                </li>
                <li ref={option3} onClick={(e) => checkAnswer(e, 3)}>
                  {question.option3}
                </li>
                <li ref={option4} onClick={(e) => checkAnswer(e, 4)}>
                  {question.option4}
                </li>
              </ul>
              <button onClick={next} className='btn'>
                Next
              </button>
              <div className='index'>
                {index + 1} of {data.length} questions
              </div>
            </>
          )}

          {result ? (
            <>
              You scored {score} out of {data.length}
              <br />
              {score >= 7 ? <Eligible /> : <NotEligible/>}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
