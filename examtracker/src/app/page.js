import AddExam from "./components/AddExam";
import EditExam from "./components/EditExam";
import WelcomePage from "./components/WelcomePage"
import Link from "next/link";
import ScheduleView from "./components/ScheduleView";

function Home () {
  return(
    <div className="home">
      <WelcomePage />
      {/* <ScheduleView /> */}

    </div>
  )
}

export default Home;