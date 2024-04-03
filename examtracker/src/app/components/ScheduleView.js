// ScheduleView.js
import React from 'react';
import ExamCard from './ExamCard';
import "./ScheduleView.css";


const ScheduleView = () => {
    const exams = [
        {
            id: 1,
            image: "/images/DefaultImage.jpeg",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 2,
            image: "/images/DefaultImage.jpeg",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 3,
            image: "/images/DefaultImage.jpeg",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 4,
            image: '/images/DefaultImage.jpeg',
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 5,
            image: "/images/DefaultImage.jpeg",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
  
    ];

    return (
        <div className="schedule-view-container">
            <div className="upcoming-exams">
                <h2 className="upcoming">Upcoming Exams</h2>
               
                <div className="exam-cards-container">
                    {exams.map(exam => (
                        <ExamCard 
                            key={exam.id}
                            name={exam.name}
                            date={exam.date}
                            location={exam.location}
                            time={exam.time}
                            image={exam.image}
                            
                        />
                    ))}
                </div>
            </div>
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
