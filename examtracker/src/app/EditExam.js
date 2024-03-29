import Row from "./Row";
import Button from "./Button";

let editExam = {
    name: "Name of Exam:",
    type: "text"
}

let editSubject = {
    name: "Subject:",
    type: "text"
}

let editDateOfExam = {
    name: "Date of Exam:",
    type: "date"
}

let editImgAddress = {
    name: "Image Address:",
    type: "text"
}

let editExamButton = {
    label: "Edit Exam",
    action: {}
}

const EditExam = () => {
    return (
        <div>
            <h1>Edit Exam</h1>
            <Row item={editExam}/>
            <Row item={editSubject}/>
            <Row item={editDateOfExam}/>
            <Row item={editImgAddress}/>
            <Button item={editExamButton}/>
        </div>
    );

}
export default EditExam;