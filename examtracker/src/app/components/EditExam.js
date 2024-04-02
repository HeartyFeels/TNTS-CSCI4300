import Row from "./Row";
import Button from "./Button";
import { useState
 } from "react";
let editExam = {
    name: "Name of Exam: ",
    type: "text"
}

let editSubject = {
    name: "Subject: ",
    type: "text"
}

let editDateOfExam = {
    name: "Date of Exam: ",
    type: "date"
}

let editLocation = {
    name: "Exam Location: ",
    type: "text"
}

let editImgAddress = {
    name: "Image Address: ",
    type: "text"
}

let editExamButton = {
    label: "Edit Exam",
    action: {}
}

// const EditExam = () => {
//     return (
//         <div>
//             <h1>Edit Exam</h1>
//             <Row item={editExam}/>
//             <Row item={editSubject}/>
//             <Row item={editDateOfExam}/>
//             <Row item={editLocation}/>
//             <Row item={editImgAddress}/>
//             <Button type="submit" action={addHandler}>Edit Exam</Button>
//         </div>
//     );

// }
// export default EditExam;

const EditExam = (props) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

    const nameChanger = (event) => {
        setName(event.target.value);
    }

    const subjectChanger = (event) => {
        setSubject(event.target.value);
    }

    const dateChanger = (event) => {
        setDate(event.target.value);
    }

    const locationChanger = (event) => {
        setLocation(event.target.value);
    }

    const imgChanger = (event) => {
        setImg(event.target.value);
    }

    const addHandler = (event) => {
        event.preventDefault();
        const exam = {
            id: Math.random().toString(),
            name: name,
            subject: subject,
            date: date,
            location: location,
            img: img
        }

        props.onAddExam(exam);
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("date").value = "";
        document.getElementById("location").value = "";
        document.getElementById("img").value = "";
        
        setName("");
        setSubject("");
        setDate("");
        setLocation("");
        setImg("");
    }
    
    return (
        <div>
            <h1>Edit Exam</h1>
            
            <div className="row">
                <label>Name of Exam: </label>
                <input 
                type="text"
                id="name"
                onChange={nameChanger}
                />
            </div>

            <div className="row">
                <label>Subject: </label>
                <input 
                type="text"
                id="subject"
                onChange={subjectChanger}
                />
            </div>

            <div className="row">
                <label>Date of Exam: </label>
                <input 
                type="date"
                id="date"
                onChange={dateChanger}
                />
            </div>

            <div className="row">
                <label>Location: </label>
                <input 
                type="text"
                id="location"
                onChange={locationChanger}
                />
            </div>

            <div className="row">
                <label>Image Address: </label>
                <input 
                type="text"
                id="img"
                onChange={imgChanger}
                />
            </div>

            <Button type="submit" action={addHandler}>Edit Exam</Button>
        </div>
    );
}
export default EditExam;