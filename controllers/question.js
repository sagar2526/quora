const Questions = require('../models/question')

exports.getAllQuestions = (request, response) => {
    var query = Questions.find()
    console.log(request.query)
    query.exec((error, questions) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(questions)
    })
}

exports.postNewQuestions = (request, response) => {
    console.log(request.body)
    let question = new Questions({
        question: request.body.question,
        createdBy: request.body.createdBy,
        createdOn: request.body.createdOn,
        createdAt: request.body.createdAt
    })
    question.save().then((question) => {
        console.log('Question Added')
        response.json(question)
    })
}

exports.updateQuestionById = (request, response) => {
    Questions.updateOne({
            _id: request.params.id,
        }, {
            question: request.body.question,
            createdBy: request.body.createdBy,
            createdOn: request.body.createdOn,
            createdAt: request.body.createdAt
        }, {},

        (error, question) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(question)
        })
}

exports.delQuestionById = (request,response) => {
	Questions.findOneAndDelete({
		_id: request.params.id
	}, (error, delQuestion) => {
		if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully"
        })
	})
   }