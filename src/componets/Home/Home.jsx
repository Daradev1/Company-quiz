import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Mininav from '../Mininav/Mininav';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');  // Redirect to quiz page
  };

  return (
    <>
    <Mininav/>
     <section className="Home">
      <div className="container-box">
      <div className="home-box1">
      <h2>Master Frosty anniversary</h2>
      <p>Are you ready to test your knowledge about our MasterFrosty? This quiz is designed to help you learn more about what we do, our values, and how we can better serve you. Whether you're a long-time customer 
        or new to our brand, this is a fun and interactive way to engage with us.
     Complete the quiz, and see if you're eligible for an exclusive offer! Dive in and see how well you know us!</p>
        <button className='start-quiz-btn' onClick={startQuiz}>Start Quiz</button>
      </div>
      </div>
     </section>
    
    </>
  );
}


export default Home