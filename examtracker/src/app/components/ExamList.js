"use client"

import axios from "axios"
import ExamCard from "./ExamCard"
import { useEffect, useState } from "react"
const ExamList = () => {
    const [exams, setExams] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:8082/api/exams')
        .then((res) => {
            setExams(res.data);
        })
        .catch((err) => {
            console.log("Error from ExamList")
        });
    }, []);


    const deleteExamInState = (examId) => {
        setExams((currentExams) => currentExams.filter((exam) => exam._id !== examId));
    };


    const updateExamInState = (updatedExam) => {
        setExams((currentExams) => {
          return currentExams.map((exam) => {
            if (exam._id === updatedExam._id) {
              return { ...exam, ...updatedExam };
            }
            return exam;
          });
        });
    };


    return (
        <div>
            {exams.map((exam) => (
                <ExamCard 
                    key = {exam._id}
                    identifier = {exam._id}
                    name = {exam.name}
                    subject = {exam.subject}
                    date = {exam.date}
                    location = {exam.location}
                    img = {exam.image}
                    onDeleteExamInState={deleteExamInState}
                    onUpdateExamInState={updateExamInState}
                />
            ))}
        </div>
    )
}

export default ExamList;