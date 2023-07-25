import React from 'react';
import './HomePage.css';
import SubjectCards from '../../components/SubjectCards/SubjectCards';
import config from '../../config/config';



const HomePage = () => {
 

  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to E-Assessment</h2>
        <p>Choose a subject to begin:</p>
       <SubjectCards/>
      </div>
    </div>
  );
};

export default HomePage;
