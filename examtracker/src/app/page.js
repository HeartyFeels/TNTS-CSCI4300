"use client"

import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"
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
    </div>
  )
}

export default Home;