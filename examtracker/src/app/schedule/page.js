"use client"
import { useState } from "react";
import ExamList from "../components/ExamList";
import Link from "next/link";
import Button from "../components/Button";
import AddExam from "../components/AddExam";
import EditExam from "../components/EditExam";
import ScheduleView from "../components/ScheduleView";
import Navbar from "../components/NavBar";
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
            <Navbar/>
            <ScheduleView/>
            <ExamList items={exams}/>
            {/* <AddExam onAddExam={addHandler}/>
            <EditExam onEditExam={editHandler}/> */}
        </div>
    )
}

export default Schedule;