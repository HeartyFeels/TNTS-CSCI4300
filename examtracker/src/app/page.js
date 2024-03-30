import SignUpBox from "./SignUpBox"
import Card from "./Card"
import AddExam from "./AddExam"
import EditExam from "./EditExam"
import LoginBox from "./LoginBox"
import ExamCard from "./ExamCard";


let data = {
  name: "CSCI 1302 Exam 2",
  date: "03/28/2024",
  src: "https://nwc.edu/academics/photos/program-photos/computer-science.jpg",
  location: "Boyd 328"
}
export default function Home() {
  return ( 
    <section>

      <ExamCard item={data}/>

      <Card>
        <SignUpBox />
      </Card>

      <Card>
        <LoginBox />
      </Card>

      <Card>
        <AddExam />
      </Card>
      <Card>
        <EditExam/>
      </Card>
    </section>
  );
}
