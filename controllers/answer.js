const Answers = require('../models/answer')

exports.getAllAnswers = (request, response) => {
    var query = Answers.find()
    console.log(request.query)
    query.exec((error, answers) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(answers)
    })
}

exports.postNewAnswer = (request, response) => {
    console.log(request.body)
    let answer = new Answers({
        answer: request.body.answer,
        questionId: request.body.questionId,
        createdBy: request.body.createdBy,
        updatedAt: request.body.updatedAt,
        createdAt: request.body.createdAt
    })
    answer.save().then((answer) => {
        console.log('Answer Added')
        response.json(answer)
    })
}

exports.updateAnswerById = (request, response) => {
    Answers.updateOne({
            _id: request.params.id,
        }, {
            answer: request.body.answer,
            questionId: request.body.questionId,
            createdBy: request.body.createdBy,
            updatedAt: request.body.updatedAt,
            createdAt: request.body.createdAt
        }, {},

        (error, answer) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(answer)
        })
}

exports.delAnswerById = (request, response) => {
    Answers.findOneAndDelete({
        _id: request.params.id
    }, (error, delAnswer) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully",
            delAnswer
        })
    })
}