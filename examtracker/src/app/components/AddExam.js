"use client"

import Button from "./Button";
import "./Row.css"
import Card from "./Card";
import Link from "next/link";

import {useState} from 'react';

const AddExam = (props) => {
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

    const addHandler = (event) => {
        event.preventDefault();
        const exam = {
            name: name,
            subject: subject,
            date: date,
            location: location,
            img: img
        }
        

        props.onAddExam(exam);
        
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
                <h1>Add Exam</h1>
                <form onSubmit={addHandler}>
                <div className="row">
                    <label>Name of Exam: </label>
                    <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={nameChanger}
                    />
                </div>

                <div className="row">
                    <label>Subject: </label>
                    <input 
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={subjectChanger}
                    />
                </div>

                <div className="row">
                    <label>Date of Exam: </label>
                    <input 
                    type="date"
                    id="date"
                    value={date}
                    onChange={dateChanger}
                    />
                </div>

                <div className="row">
                    <label>Location: </label>
                    <input 
                    type="text"
                    id="location"
                    value={location}
                    onChange={locationChanger}
                    />
                </div>

                <div className="row">
                    <label>Image Address: </label>
                    <input 
                    type="text"
                    id="img"
                    value={img}
                    onChange={imgChanger}
                    />
                </div>
                <Link href="/schedule"><Button type="submit" action={addHandler}>Add Exam</Button></Link>
                </form>
            </Card>
        </div>
    );
}
export default AddExam;