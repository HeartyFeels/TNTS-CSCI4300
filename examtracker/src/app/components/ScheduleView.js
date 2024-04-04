// ScheduleView.js
import React from 'react';
import "./ScheduleView.css";
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
        <div className="schedule-view-container">
            <div className="schedule-chart">
                <h2>Schedule for the Week</h2>
                <div className="schedule-chart-container">
                    {/* Schedule chart with days of the week */}
                    <div className="schedule-days">
                        {/* Card-like structure for each day */}
                        <div className="schedule-day-card">
                            <h3 className="day-title">Monday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Tuesday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Wednesday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Thursday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Friday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Saturday</h3>
                            {/* Space for further content */}
                        </div>
                        <div className="schedule-day-card">
                            <h3 className="day-title">Sunday</h3>
                            {/* Space for further content */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ending"></div>
        </div>
    );
}

export default ScheduleView;
