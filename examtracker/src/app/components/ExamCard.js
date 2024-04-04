import Button from "./Button";
import "./ExamCard.css";
import Link from "next/link";
const ExamCard = (props) => {
    return (
        <div className="examcard">
            <img src={props.img} alt={props.name} width="100%" height="100%"/>
            <p>Exam: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <div id="buttons">
                <Link href ="/addexam"><Button>Add Exam</Button></Link>
                <Link href ="/editexam"><Button>Edit Exam</Button></Link>
            </div>
        </div>
    );
}

export default ExamCard;