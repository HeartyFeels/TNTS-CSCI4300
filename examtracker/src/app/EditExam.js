const EditExam = () => {
    return (
        <div class="grid">
            <h1>Add Exam</h1>
            <label>Name of Exam:</label>
            <input required type="text"/>
            <label>Subject:</label>
            <input required type="text"/>
            <label>Date of Exam:</label>
            <input required type="date"/>
            <label>Image Address:</label>
            <input type="text"/>
            <button>Save Changes</button>
        </div>
    )

}
export default EditExam;