"use client"

import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"
import { Component, useState } from "react";
import UserContext, { UserProvider } from "./components/context/UserContext";



function Home ({Component, pageProps}) {
  // const [isActive, setIsActive] = useState(false);
  
  // const activeHandler = () => {
  //   setIsActive(!isActive);
  //   console.log(isActive);
  // }

  return(
      <div className="home">
        <Navbar isActive={false} />
        {/* <UserProvider>
          <Navbar/>
          <Component {...pageProps} />
        </UserProvider> */}
        <WelcomePage/>
      </div>
  )
}
export default Home;