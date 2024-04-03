"use client"
import { useState } from "react";
import ExamList from "../components/ExamList";
import Link from "next/link";
import Button from "../components/Button";
import AddExam from "../components/AddExam";
import EditExam from "../components/EditExam";
const Schedule = () => {
    const [exams, setExams] = useState([]);

    const addHandler = (exam) => {
        setExams((prevExam) => {
        return [exam, ...prevExam];
        })
    }

    const editHandler = (exam) => {
        setExams((prevExam) => {
            return [exam, ...prevExam];
        })
    }

    return (
        <div>
            <ExamList items={exams}/>
            <AddExam onAddExam={addHandler}/>
            <EditExam onEditExam={editHandler}/>
            <Link href="/addexam"><Button>Add Exam</Button></Link>
        </div>
    )
}

export default Schedule;