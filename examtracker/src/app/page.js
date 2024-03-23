import SignUpBox from "./SignUpBox"
import Card from "./Card"
import AddExam from "./AddExam"
import EditExam from "./EditExam"
import LoginBox from "./LoginBox"

export default function Home() {
  return ( 
    <section>
      <Card>
        <SignUpBox />
      </Card>

      <Card>
        <LoginBox />
      </Card>

      <Card>
        <AddExam />
      </Card>
    </section>
  );
}
