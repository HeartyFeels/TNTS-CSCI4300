"use client"
import Button from "./Button";
import { useState } from "react";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"
const EditExam = (props) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

    const nameChanger = (event) => {
        setName(event.target.value);
    }

    const subjectChanger = (event) => {
        setSubject(event.target.value);
    }

    const dateChanger = (event) => {
        setDate(event.target.value);
    }

    const locationChanger = (event) => {
        setLocation(event.target.value);
    }

    const imgChanger = (event) => {
        setImg(event.target.value);
    }

    const editHandler = (event) => {
        event.preventDefault();
        // const exam = {
        //     //id: Math.random().toString(),
        //     name: name,
        //     subject: subject,
        //     date: date,
        //     location: location,
        //     img: img
        // }

        props.onEditExam(exam);
        // document.getElementById("name").value = "";
        // document.getElementById("subject").value = "";
        // document.getElementById("date").value = "";
        // document.getElementById("location").value = "";
        // document.getElementById("img").value = "";
        
        setName("");
        setSubject("");
        setDate("");
        setLocation("");
        setImg("");
    }
    
    return (
        <div>
            <Card>
                <h1>Edit Exam</h1>
                <form onSubmit={editHandler}>
                <div className="row">
                    <label>Name of Exam: </label>
                    <input 
                    type="text"
                    id="name"
                    onChange={nameChanger}
                    />
                </div>

                <div className="row">
                    <label>Subject: </label>
                    <input 
                    type="text"
                    id="subject"
                    onChange={subjectChanger}
                    />
                </div>

                <div className="row">
                    <label>Date of Exam: </label>
                    <input 
                    type="date"
                    id="date"
                    onChange={dateChanger}
                    />
                </div>

                <div className="row">
                    <label>Location: </label>
                    <input 
                    type="text"
                    id="location"
                    onChange={locationChanger}
                    />
                </div>

                <div className="row">
                    <label>Image Address: </label>
                    <input 
                    type="text"
                    id="img"
                    onChange={imgChanger}
                    />
                </div>
                <Link href="/schedule"><Button type="submit" onClick={editHandler}>Edit Exam</Button></Link>
                </form>
            </Card>
        </div>
    );
}
export default EditExam;