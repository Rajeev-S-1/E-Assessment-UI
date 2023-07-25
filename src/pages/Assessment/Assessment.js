import React, { useState, useEffect } from 'react';
import './Assessment.css'; // Import the CSS file for styling
import { FetchData, post } from '../../services/api';
import Timer from '../../components/Timer/Timer';
import Mcq from '../../components/Questions/Mcq/Mcq';
import config from '../../config/config';
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { addItem  } from '../../redux/itemsSlice';





const Assessment = () => {
  const {subjectid} = useParams();
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SubjectsCompleted = useSelector((state) => state.items.items);

  console.log(SubjectsCompleted)

  if(SubjectsCompleted.includes(subjectid))
  {
    console.log("..................")

    navigate('/testsubmitted');
  }


  const {data :questionsData,isPending,error} =  FetchData(`${config.QuestionsUrl}Questions?subjectId=${subjectid}`);

  console.log("Loaded...");


  const handleAnswerChange = (questionId, selectedOption) => {
    const updatedAnswers = [...answers];
    const answerIndex = updatedAnswers.findIndex((answer) => answer.questionId === questionId);

    if (answerIndex !== -1) {
      updatedAnswers[answerIndex] = { questionId, selectedOption };
    } else {
      updatedAnswers.push({ questionId, selectedOption });
    }

    setAnswers(updatedAnswers);
  };

  const submitAssessment = () => {
    // Handle assessment submission
    console.log('Assessment  submitted:', answers);
    if(!SubjectsCompleted.includes(subjectid))
    dispatch(addItem(parseInt(subjectid)));
    navigate('/submitted');
  };

  return (
    <div className="assessment-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading . . .</div>}
      <h1 className="assessment-title">Assessment</h1>
         <Timer submitAssessment={submitAssessment}/>
     {questionsData && <Mcq questions = {questionsData} handleAnswerChange ={handleAnswerChange}/>}
      <button className="submit-button" onClick={submitAssessment}>Submit</button>
    </div>
  );
};

export default Assessment;
