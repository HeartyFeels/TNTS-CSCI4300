import React from 'react';
import "./ScheduleView.css";
import Link from 'next/link';

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
                                <a href="/editexam">
                                    <div className="button">
                                        <button type="button">Edit Exam</button>
                                    </div>
                                </a>
                                <a href="/schedule">
                                    <div className="button">
                                        <button type="button">Delete Exam</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="schedule-chart">
                <h2 className="heading" >Schedule for the Week</h2>
                <div className="schedule-chart-container">
                    {/* Schedule chart with days of the week */}
                    <div className="schedule-days">
                        {/* Card-like structure for each day */}
                        <div className="schedule-day">Monday</div>
                        <div className="schedule-day">Tuesday</div>
                        <div className="schedule-day">Wednesday</div>
                        <div className="schedule-day">Thursday</div>
                        <div className="schedule-day">Friday</div>
                        <div className="schedule-day">Saturday</div>
                        <div className="schedule-day">Sunday</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleView;
