import React from 'react';
import Button from "./Button";
import Link from "next/link";
import "./ExamCard.css";

const ExamCard = (props) => {
    return (
        <div className="examcard">
            <img src={props.img} alt={props.name} width="100%" height="100%"/>
            <p>Exam: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
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
    );
}
export default ExamCard;
