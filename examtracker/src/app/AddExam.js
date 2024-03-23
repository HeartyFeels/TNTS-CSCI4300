const AddExam = () => {
    return (
        <div class="card">
            <h1>Add Exam</h1>

            <label>Name of Exam:</label>
            <input required type="text"/>

            <label>Subject:</label>
            <input required type="text"/>

            <label>Date of Exam:</label>
            <input required type="date"/>

            <label>Image Address:</label>
            <input type="text"/>

            <button>Add Exam to Planner</button>
        </div>
    )
}
export default AddExam;