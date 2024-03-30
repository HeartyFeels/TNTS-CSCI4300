import Row from "./Row";
import Button from "./Button";

let addExam = {
    name: "Name of Exam: ",
    type: "text"
}

let subject = {
    name: "Subject: ",
    type: "text"
}

let dateOfExam = {
    name: "Date of Exam: ",
    type: "date"
}

let location = {
    name: "Exam Location: ",
    type: "text"
}

let imgAddress = {
    name: "Image Address: ",
    type: "text"
}

let addExamButton = {
    label: "Add Exam",
    action: {}
}

const AddExam = () => {
    return (
        <div>
            <h1>Add Exam</h1>
            <Row item={addExam}/>
            <Row item={subject}/>
            <Row item={dateOfExam}/>
            <Row item={location}/>
            <Row item={imgAddress}/>
            <Button item={addExamButton}/>
        </div>
    );
}
export default AddExam;