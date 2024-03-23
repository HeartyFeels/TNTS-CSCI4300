const AddExam = () => {
    return (
        <div class="card">
            <h1>Add Exam</h1>

            <label>Name of Exam:</label>
            <input required type="text"/>

            <label>Subject:</label>
            <input required type="text"/>

            <label>Date of Exam:</label>
            <input required type="text"/>

            <label>Image Address:</label>
            <input type="text"/>
        </div>
    )
}
export default AddExam;