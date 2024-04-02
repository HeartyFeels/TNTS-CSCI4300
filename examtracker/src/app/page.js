"use client"

import SignUpBox from "./SignUpBox"
import Card from "./Card"
import AddExam from "./AddExam"
import EditExam from "./EditExam"
import LoginBox from "./LoginBox"
import ExamList from "./ExamList"
import { useState } from "react"
import WelcomePage from "./WelcomePage"

// let data = {
//   name: "CSCI 1302 Exam 2",
//   date: "03/28/2024",
//   src: "https://nwc.edu/academics/photos/program-photos/computer-science.jpg",
//   location: "Boyd 328"
// }

export default function Home() {
  const [exams, setExams] = useState([]);

  const addHandler = (exam) => {
    setExams((prevExam) => {
      return [exam, ...prevExam];
    })
  }

  return ( 
    <section>


      <WelcomePage />
  
  
      <Card>
        <SignUpBox />
      </Card>

      <Card>
        <LoginBox />
      </Card>

      <Card>
        <AddExam onAddExam={addHandler} />
      </Card>
      <ExamList items={exams}/>
      <Card>
        <EditExam/>
      </Card>
    </section>
  );
}
