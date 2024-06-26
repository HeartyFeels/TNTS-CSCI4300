import React, { useState } from 'react';
import Button from "./Button";
import Link from "next/link";
import axios from 'axios'; 
import "./ExamCard.css";
import Card from "./Card";
import "./Row.css";
import UserContext from "../backend/context/UserContext";
import { useContext } from 'react';

const ExamCard = (props) => {

    /*const handleDeleteItem = async () => {
        try {
         axios.delete(`http://localhost:8082/api/exams/${props.examId}`);
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };
    */

    const {userData} = useContext(UserContext);
    const [name, setName] = useState(`${props.name}`);
    const [subject, setSubject] = useState(`${props.subject}`);
    const [date, setDate] = useState(`${props.date}`);
    const [location, setLocation] = useState(`${props.location}`);
    const [img, setImg] = useState(`${props.img}`);
    const [edit, setEdit] = useState(false);

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

    const handleDeleteItem = async(event) => {
        event.preventDefault()
        try {
            await axios.delete(`http://localhost:8082/api/exams/${props.identifier}`);
            props.onDeleteExamInState(props.identifier); // Update the parent state to reflect deletion
        } catch (error) {
            console.log('Error deleting exam:', error);
        }
    };
    
    const handleEdit = async(event) => {
        event.preventDefault()
        setEdit(true);
    };

    // const pushEdit = async(event) => {
    //     event.preventDefault();
    //     try {
    //         const updatedExam = { name, subject, date, location, img };
    //         const response = await axios.put(`http://localhost:8082/api/exams/${props.identifier}`, updatedExam);
    //         console.log(response.data);
    
    //         // Call the update handler passed via props
    //         props.onUpdateExamInState(response.data);

    //         setEdit(false); // Optionally close the edit view
    //     } catch (error) {
    //         console.error('Error updating exam:', error);
    //     }
    // }; 

    const pushEdit = async (event) => {
        event.preventDefault();
        try {
            // Constructing the updatedExam object
            const updatedExam = {
                _id: props.identifier, // Include the identifier as part of the update
                name: name,
                subject: subject,
                date: date,
                location: location,
                image: img // Make sure the key here matches what's used in ExamList
            };
    
            // Perform the PUT request to the server to update the exam
            const response = await axios.put(`http://localhost:8082/api/exams/${props.identifier}`, updatedExam);
    
            // Upon successful update, call the onUpdateExamInState with the updated exam data
            if (response.data) {
                props.onUpdateExamInState(response.data);
                setEdit(false); // Close the edit mode
            } else {
                // Handle case where response data may not be as expected
                console.error('Unexpected response data:', response);
            }
        } catch (error) {
            console.error('Error updating exam:', error);
        }
        window.location.reload()
    };

    const renderCard = () => {
        return (
            <div className="examcard">
            <img src={props.img} alt={props.name} width="150px" height="150px"/>
            <p>Exam: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <div className="buttons-container">
                <Button onClick={() => setEdit(true)}>Edit Exam</Button>
                <Button onClick={handleDeleteItem}>Delete Exam</Button> 
            </div>
        </div>
        )
    }

    const editCard = () => {
        return(
            <div className='examcard'>
                <form onSubmit={pushEdit}>
                    <div className="row">
                        <label>Name of Exam: </label>
                        <input 
                            type="text"
                            id="name"
                            value={name} // Prefilled with current value
                            onChange={nameChanger}
                        />
                    </div>
    
                    <div className="row">
                        <label>Subject: </label>
                        <input 
                            type="text"
                            id="subject"
                            value={subject} // Prefilled with current value
                            onChange={subjectChanger}
                        />
                    </div>
    
                    <div className="row">
                        <label>Date of Exam: </label>
                        <input 
                            type="date"
                            id="date"
                            value={date} // Prefilled with current value
                            onChange={dateChanger}
                        />
                    </div>
    
                    <div className="row">
                        <label>Location: </label>
                        <input 
                            type="text"
                            id="location"
                            value={location} // Prefilled with current value
                            onChange={locationChanger}
                        />
                    </div>
    
                    <div className="row">
                        <label>Image Address: </label>
                        <input 
                            type="text"
                            id="img"
                            value={img} // Prefilled with current value
                            onChange={imgChanger}
                        />
                    </div>
                    {/* <Button onClick={() => window.location.reload()}>Save Changes</Button> */}
                    <Button type="submit">Save Changes</Button>
                </form>
            </div>
        )
    }
    

    return (
        edit ? editCard() : renderCard()
    );
}

export default ExamCard;
