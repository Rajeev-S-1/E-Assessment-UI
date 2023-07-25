import './SubjectCards.css';
import { Link } from "react-router-dom";
import { FetchData, post } from '../../services/api';
import config from '../../config/config';
import { useSelector } from 'react-redux';




const SubjectCards = () => {
    console.log("Loaded...")
    const SubjectsCompleted = useSelector((state) => state.items.items);


    const {data : subjects,isPending = true,error} =  FetchData(`${config.SubjectsUrl}subjects`);
    if(isPending)
    {
    return <div>Loading...</div>;
    }

    return (  
    <div className="subject-cards">
            {error && <div>{error}</div>}
    {subjects && subjects.map((subject) => (
      <div key={subject.id} className="subject-card">
        <h3>{subject.title}</h3>
        <p>{subject.description}</p>
        {SubjectsCompleted.includes(subject.id) ? (
          
        <Link to = {`/testsubmitted`} className="start-button">Start Assessment</Link>
        ) :
        (
          
        <Link to = {`/assessment/${subject.id}`} className="start-button">Start Assessment</Link> 
        
        ) 
}
      </div>
    ))}
  </div>);
}
 
export default SubjectCards;