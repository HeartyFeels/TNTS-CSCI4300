import React from 'react';
import "./ScheduleView.css";
import Link from 'next/link';
import Button from './Button';
import ExamList from './ExamList';
const ScheduleView = () => {
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
            date: "April 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
    ];

    return (
        <div className="schedule-view-container">
            <h1 className="upcoming-exams">Upcoming Exams</h1>
            <div className ="add-exam-button">
                <Link href="/addexam"><Button>+ Add Exam</Button></Link>
            </div>
            <ExamList items={exams} />
        </div>
    );
}

export default ScheduleView;
