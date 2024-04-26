'use client'
import EditExam from "../components/EditExam";
import ExamList from "../components/ExamList";
import Navbar from "../components/NavBar";
import {useState} from 'react'
const EditPage = ({params}) => {
    const [exams, setExams] = useState([]);
    const editHandler = (exam) => {
        setExams((prevExam) => {
            //id: params.id;
            return [exam, ...prevExam];
        })
    }
    return (
        <div>
            <Navbar/>
            {/* <ExamList items={exams}/> */}
            <EditExam onEditExam={editHandler}/>
        </div>
    )
}

export default EditPage;