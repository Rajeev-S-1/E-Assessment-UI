import React from 'react';
import { Link } from 'react-router-dom';
import './Submitted.css'; 
import { useSelector } from 'react-redux';



const Submitted = () => {
  const SubjectsCompleted = useSelector((state) => state.items.items);
  console.log(SubjectsCompleted);

  return (
    <div className="submission-success-container">
      <h1 className="submission-success-title">Assessment Submitted Successfully!</h1>
      <p className="submission-success-message">Thank you for completing the assessment.</p>
      <Link to="/" className="submission-success-link">Go to Home</Link>
    </div>
  );
};

export default Submitted;
