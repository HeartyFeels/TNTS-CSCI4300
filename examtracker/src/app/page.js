import AddExam from "./components/AddExam";
import EditExam from "./components/EditExam";
import WelcomePage from "./components/WelcomePage"
import Link from "next/link";

function Home () {
  return(
    <div className="home">
      <WelcomePage />
      {
        //testing
      }
      <AddExam/>
      <EditExam/>
    </div>
  )
}

export default Home;