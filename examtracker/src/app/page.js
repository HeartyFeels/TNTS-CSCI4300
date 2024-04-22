"use client"

import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"


function Home () {
  return(
      <div className="home">
          <Navbar/>
          <WelcomePage />
      </div>
  )
}
export default Home;