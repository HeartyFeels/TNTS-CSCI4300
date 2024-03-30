import Button from "./Button";
import "./ExamCard.css";

let editButton = {
    label: "Edit",
    action: {}
}

let deleteButton = {
    label: "Delete",
    action: {}
}

const ExamCard = (props) => {
    return (
        <div className="examcard">
            <img src={props.item.src} alt={props.item.name} width="100%" height="100%"/>
            <p>Exam: {props.item.name}</p>
            <p>Date: {props.item.date}</p>
            <p>Location: {props.item.location}</p>
            <div id="buttons">
                <Button item={editButton}/> 
                <Button item={deleteButton}/>
            </div>
        </div>
    );
}

export default ExamCard;