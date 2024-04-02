import ExamCard from "./ExamCard"

const ExamList = (props) => {
    return (
        <div>
            {props.items.map((exam) => (
                <ExamCard 
                    key = {exam.id}
                    name = {exam.name}
                    subject = {exam.subject}
                    date = {exam.date}
                    location = {exam.location}
                    img = {exam.img}
                />
            ))}
        </div>
    )
}

export default ExamList;