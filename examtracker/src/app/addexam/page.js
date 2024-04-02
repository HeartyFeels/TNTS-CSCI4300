"use client"

import AddExam from "../components/AddExam";
import { useState } from "react";

const AddPage = () => {
    const [exams, setExams] = useState([]);

    const addHandler = (exam) => {
        setExams((prevExam) => {
        return [exam, ...prevExam];
        })
    }

    return (
        <div>
            <AddExam onAddExam={addHandler}/>
        </div>
    )
}

export default AddPage;