import React, { useState, useEffect } from 'react';
import config from '../../config/config';


const Timer = (props) => {
    const submitAssessment = props.submitAssessment;
    const [timer, setTimer] = useState(config.AssessmentTime); // 5 minutes in seconds
    console.log("Loaded...")

    useEffect(() => {
    
        // Timer logic
        if (timer > 0) {
          const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
          }, 1000);
    
          return () => clearInterval(intervalId);
        } else {
          // Submit the assessment when the timer reaches 0
          submitAssessment();
        }
      }, [timer]);
    return (  
        <p className="assessment-timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
    );
}
 
export default Timer;