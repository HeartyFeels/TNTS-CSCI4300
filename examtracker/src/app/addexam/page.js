"use client"

import AddExam from "../components/AddExam";
import { useState } from "react";
import ExamList from "../components/ExamList";

const AddPage = () => {
    const [exams, setExams] = useState([]);
    const addHandler = (exam) => {
        setExams((prevExam) => {
        return [exam, ...prevExam];
        })
    }

    return (
        <div>
            <ExamList items={exams}/>
            <AddExam onAddExam={addHandler}/>
        </div>
    )
}

export default AddPage;