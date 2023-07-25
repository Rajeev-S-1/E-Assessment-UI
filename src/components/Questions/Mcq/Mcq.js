import './Mcq.css';

const Mcq = (props) => {
    const questions = props.questions;
    const handleAnswerChange = props.handleAnswerChange;
    console.log("Loaded...")
    return ( 
        questions.map((question) => (
            <div key={question.id} className="question-container">
              <h3 className="question-text">{question.questionText}</h3>
              <ul className="options-list">
                {question.options.map((option) => (
                  <li key={option.id} className="option-item">
                    <label className="option-label">
                      <input
                        type="radio"
                        name={question.id}
                        value={option.id}
                        
                        className="option-input"
                      />
                      {option.optionText}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))
     );
}
 
export default Mcq;