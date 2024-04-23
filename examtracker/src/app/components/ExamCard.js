import React from 'react';
import Button from "./Button";
import Link from "next/link";
import "./ExamCard.css";

const ExamCard = (props) => {
    return (
        <div className="examcard">
            <img src={props.img} alt={props.name} width="200px" height="150px"/>
            <p>Exam: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <div className="buttons-container">
                <Link href="/addexam">
                    <Button>Edit Exam</Button>
                </Link>
                <Link href="/schedule">
                    <Button>Delete Exam</Button>
                </Link>
            </div>
        </div>
    );
}
export default ExamCard;
