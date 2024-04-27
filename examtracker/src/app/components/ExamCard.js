import React, { useState } from 'react';
import Button from "./Button";
import Link from "next/link";
import axios from 'axios'; 
import "./ExamCard.css";
import Card from "./Card";
import "./Row.css";

const ExamCard = (props) => {

    /*const handleDeleteItem = async () => {
        try {
         axios.delete(`http://localhost:8082/api/exams/${props.examId}`);
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };
    */

    const handleDeleteItem = () => {
        try {
            const response = axios.delete(`http://localhost:8082/api/exams'/${props._id}`);
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };
    

    return (
        <div className="examcard">
            <img src={props.img} alt={props.name} width="150px" height="150px"/>
            <p>Exam: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <div className="buttons-container">
                <Link href="/editexam">
                    <Button>Edit Exam</Button>
                </Link>
                <Button onClick={handleDeleteItem}>Delete Exam</Button> 
            </div>
        </div>
    );
}

export default ExamCard;
