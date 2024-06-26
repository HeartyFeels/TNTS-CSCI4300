"use client"

import React from "react";

import Button from "./Button";
import "./Row.css"
import Card from "./Card";
import Link from "next/link";

import {useState} from 'react';
import axios from "axios";
import UserContext from "../backend/context/UserContext";
import { useContext } from "react";


const AddExam = (props) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");
    // const {userData} = useContext(UserContext);

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

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const exam = {
    //         id: Math.random().toString(),
    //         name: name,
    //         subject: subject,
    //         date: date,
    //         location: location,
    //         img: img
    //     }

    //     console.log(exam);
    //     //lifting state
    //    // props.onAddExam(exam);

    //     document.getElementById("name").value = "";
    //     document.getElementById("subject").value = "";
    //     document.getElementById("date").value = "";
    //     document.getElementById("location").value = "";
    //     document.getElementById("img").value = "";
        
    //     setName('');
    //     setSubject('');
    //     setDate('');
    //     setLocation('');
    //     setImg('');
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8082/api/exams', {
                name: name,
                subject: subject,
                date: date,
                location: location,
                image: img,
                // username: userData.user.username,

            })
            .then((res) => {
                setExam({
                    name: '',
                    subject: '',
                    date: '',
                    location: '',
                    img: '',
                });

                router.push('/')
            })
            .catch((err) => {
                console.log("Error in creating exam",err)
            });
    };
    
    return (
        <div>
            <Card>
                <h1>Add Exam</h1>
                <form onSubmit={submitHandler}>
                <div className="row">
                    <label>Name of Exam: </label>
                    <input required
                    type="text"
                    id="name"
                    onChange={nameChanger}
                    />
                </div>

                <div className="row">
                    <label>Subject: </label>
                    <input required
                    type="text"
                    id="subject"
                    onChange={subjectChanger}
                    />
                </div>

                <div className="row">
                    <label>Date of Exam: </label>
                    <input required
                    type="date"
                    id="date"
                    onChange={dateChanger}
                    />
                </div>

                <div className="row">
                    <label>Location: </label>
                    <input required
                    type="text"
                    id="location"
                    onChange={locationChanger}
                    />
                </div>

                <div className="row">
                    <label>Image Address: </label>
                    <input required
                    type="text"
                    id="img"
                    onChange={imgChanger}
                    />
                </div>
                <Button type="submit" onClick={submitHandler}><Link href="/schedule">Add Exam</Link></Button>
                </form>
            </Card>
        </div>
    );
}
export default AddExam;