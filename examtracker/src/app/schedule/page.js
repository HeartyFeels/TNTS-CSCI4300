"use client"
import { useState } from "react";
import ExamList from "../components/ExamList";
import ScheduleView from "../components/ScheduleView";
import Navbar from "../components/NavBar";
const Schedule = () => {
    const exams = [
        {
            id: 1,
            img: "/images/DefaultImage.png",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 2,
            img: "/images/DefaultImage.png",
            name: "CSCI 4300 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 3,
            img: "/images/DefaultImage.png",
            name: "CSCI 1301 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 4,
            img: '/images/DefaultImage.png',
            name: "CSCI 2610 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 5,
            img: "/images/DefaultImage.png",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
  
    ];

    return (
        <div>
            <Navbar isActive={true}/>
            <ScheduleView/>
        </div>
    )
}

export default Schedule;