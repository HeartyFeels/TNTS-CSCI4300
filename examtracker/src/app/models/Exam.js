const { default: mongoose } = require("mongoose")

const ExamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: date,
        required: true,
        default: Date.now
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = Exam = mongoose.model('exam', ExamSchema);