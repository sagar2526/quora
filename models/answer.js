const mongoose = require('mongoose')

var answerSchema = new mongoose.Schema({
	questionId: String,
	answerId: String,
	createdBy: String,
	createdAt: Date,
    updatedAt: Date,
})

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer ;