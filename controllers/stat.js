const Stat = require('../models/stat')
exports.getAllStats = (request, response) => {
 console.log(Stat)
    var query = Stat.find()
    console.log(request.query)
    query.exec((error, stats) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(stats)
    })
}

exports.postNewStat = (request, response) => {
    console.log(request.body)
    let stat = new Stat({
        views: request.body.views,
        shares: request.body.shares,
        votes: request.body.votes
    })
    stat.save().then((stat) => {
        console.log('Stat Added')
        response.json(stat)
    })
}

exports.updateStatById = (request, response) => {
    Stat.updateOne({
            _id: request.params.id,
        }, {
            views: request.body.views,
            shares: request.body.shares,
            votes: request.body.votes
        }, {},

        (error, stat) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(stat)
        })
}

exports.delStatById = (request, response) => {
    Stat.findOneAndDelete({
        _id: request.params.id
    }, (error, delStat) => {
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