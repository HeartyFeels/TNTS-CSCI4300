"use client"

import AddExam from "../components/AddExam";
import { useState } from "react";
import ExamList from "../components/ExamList";
import Navbar from "../components/NavBar";

const AddPage = () => {
    const [exams, setExams] = useState([]);
    
    const addHandler = (exam) => {
        setExams((prevExam) => {
        return [exam, ...prevExam];
        })
    }

    return (
        <div>
            <Navbar isActive={true} />
            <ExamList items={exams}/>
            <AddExam onAddExam={addHandler}/>
        </div>
    )
}

export default AddPage;