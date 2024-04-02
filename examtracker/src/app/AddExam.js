"use client"

import Button from "./Button";
import "./Row.css"

import {useState} from 'react';
let idCounter = -1;
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
            id: idCounter++,
            name: name,
            subject: subject,
            date: date,
            location: location,
            img: img
        }
        //for testing
        console.log("id counter: " + idCounter);
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
            <h1>Add Exam</h1>
            
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
            <Button type="submit" action={addHandler}>Add Exam</Button>
        </div>
    );
}
export default AddExam;