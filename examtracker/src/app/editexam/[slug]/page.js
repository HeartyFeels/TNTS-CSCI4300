import EditExam from "../components/EditExam";
import ExamList from "../components/ExamList";

const EditPage = ({params}) => {
    const [exams, setExams] = useState([]);
    const editHandler = (exam) => {
        setExams((prevExam) => {
            //id: params.id;
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