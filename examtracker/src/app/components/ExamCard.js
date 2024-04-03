import Button from "./Button";
import "./ExamCard.css";

const ExamCard = (props) => {
    const editHandler = (props) => {
        
    }
    
    const deleteHandler = () => {
        
    }

    return (
        <div className="examcard">
            <img src={props.img} alt={props.name} width="100%" height="100%"/>
            <p>Exam: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <div id="buttons">
                
                
                

            </div>
        </div>
    );
}

export default ExamCard;