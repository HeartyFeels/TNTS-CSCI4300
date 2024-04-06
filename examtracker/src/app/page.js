"use client"

import Navbar from "./components/NavBar";
import AddExam from "./components/AddExam";
import EditExam from "./components/EditExam";
import WelcomePage from "./components/WelcomePage"
import Link from "next/link";
import ScheduleView from "./components/ScheduleView";
import { useState } from "react";
function Home () {
  const [isActive, setIsActive] = useState(false);
  
  const activeHandler = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return(
    <div className="home">
      <Navbar isActive={false} />
      <WelcomePage />
      {/* <ScheduleView /> */}

    </div>
  )
}

export default Home;