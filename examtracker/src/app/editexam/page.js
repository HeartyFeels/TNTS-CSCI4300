import EditExam from "../components/EditExam";
import ExamList from "../components/ExamList";

const EditPage = () => {
    const [exams, setExams] = useState([]);
    const editHandler = (exam) => {
        setExams((prevExam) => {
            return [exam, ...prevExam];
        })
    }
    return (
        <div>
            <ExamList items={exams}/>
            <EditExam onEditExam={editHandler}/>
        </div>
    )
}

export default EditPage;