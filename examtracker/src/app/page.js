"use client"

import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"
import { UserProvider } from "./backend/context/UserContext";


function Home () {
  return(
      <div className="home">
        <UserProvider>
          <Navbar/>
          <WelcomePage />
        </UserProvider>
      </div>
  )
}
export default Home;