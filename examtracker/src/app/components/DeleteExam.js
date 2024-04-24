import Button from "./Button";
import { useState } from "react";
import Card from "./Card";
import Link from "next/link";
import "./Row.css";
import axios from "axios";

const DeleteExam = (props) => {
    const [examId, setExamId] = useState("");

    const idChangeHandler = (event) => {
        setExamId(event.target.value);
    };

    const deleteHandler = (event) => {
        event.preventDefault();

        axios.delete(`http://localhost:8082/api/exams/${id}`)
            .then(response => {
                console.log('Exam deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting exam:', error);
            });
    };

    return (
        <div>
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
        </div>
    );
};

export default DeleteExam;
