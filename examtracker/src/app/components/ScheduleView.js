import React from 'react';
import "./ScheduleView.css";
import Link from 'next/link';
import Button from './Button';

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
            <h1>Upcoming Exams</h1>
            <Link href="/addexam"><Button>+ Add Exam</Button></Link>
            <div className="upcoming-exams">

                <div className="exam-cards-container">
                    {exams.map(exam => (
                        <div key={exam.id} className="examcard">
                            <div className="image-container">
                                <img src={exam.img} alt={exam.name} className="exam-image" />
                            </div>
                            <div className="exam-details">
                                <p>Exam: {exam.name}</p>
                                <p>Date: {exam.date}</p>
                                <p>Location: {exam.location}</p>
                            </div>
                            <div className="buttons-container">
                                <Link href="/addexam">
                                    <div className="button">
                                        <button type="button">Edit Exam</button>
                                    </div>
                                </Link>
                                <Link href="/schedule">
                                    <div className="button">
                                        <button type="button">Delete Exam</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScheduleView;
