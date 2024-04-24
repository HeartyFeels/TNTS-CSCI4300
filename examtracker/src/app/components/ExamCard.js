import React, { useState } from 'react';
import Button from "./Button";
import Link from "next/link";
import axios from 'axios'; 
import "./ExamCard.css";
import Card from "./Card";
import "./Row.css";

const ExamCard = (props) => {
    const [examId, setExamId] = useState("");
    const [showDeleteSection, setShowDeleteSection] = useState(false); 

    const idChangeHandler = (event) => {
        setExamId(event.target.value);
    };

    const deleteHandler = (event) => {
        event.preventDefault();

        axios.delete(`http://localhost:8082/api/exams/${examId}`)
            .then(response => {
                console.log('Exam deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting exam:', error);
            });
    };

    const handleDelete = () => {
        setShowDeleteSection(true);
    };

    return (
        <div>
            {showDeleteSection && ( 
                <Card>
                    <h1>Delete Exam</h1>
                    <div className="row">
                        <label>Exam ID: </label>
                        <input 
                            type="text"
                            value={examId}
                            onChange={idChangeHandler}
                        />
                    </div>

                    <Button onClick={deleteHandler}>Delete Exam</Button>

                    <Link href="/schedule">
                        <Button>Cancel</Button>
                    </Link>
                </Card>
            )}

            <div className="examcard">
                <img src={props.img} alt={props.name} width="200px" height="150px"/>
                <p>Exam: {props.name}</p>
                <p>Subject: {props.subject}</p>
                <p>Date: {props.date}</p>
                <p>Location: {props.location}</p>
                <div className="buttons-container">
                    <Link href="/addexam">
                        <Button>Edit Exam</Button>
                    </Link>
                    <Button onClick={handleDelete}>Delete Exam</Button> 
                </div>
            </div>
        </div>
    );
}

export default ExamCard;
