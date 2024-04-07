"use client"

import AddExam from "../components/AddExam";
import { useState } from "react";
import ExamList from "../components/ExamList";
import Navbar from "../components/NavBar";
import ScheduleView from "../components/ScheduleView";
const AddPage = (props) => {
    return (
        <div>
            <Navbar isActive={true} />
            <AddExam onAddExam={props.onAddExam}/>
        </div>
    )
}

export default AddPage;