"use client"
import { useState } from "react";
import ExamList from "../components/ExamList";
const Schedule = () => {
    const [exams, setExams] = useState([]);

    const addHandler = (exam) => {
        setExams((prevExam) => {
        return [exam, ...prevExam];
        })
    }

    return (
        <div>
            <ExamList items={exams}/>
        </div>
    )
}

export default Schedule;