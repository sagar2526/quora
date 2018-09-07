const Page = require('../models/page')

exports.getAllPages = (request, response) => {
    var query = Page.find()
    console.log(request.query)
    query.exec((error, pages) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(pages)
    })
}

exports.postNewPages = (request, response) => {
    console.log(request.body)
    let page = new Page({
        name: request.body.name,
        slug: request.body.slug,
        body: request.body.body
    })
    page.save().then((page) => {
        console.log('Blog Added Successfully')
        response.json(page)
    })
}

exports.updatePagesById = (request, response) => {
    const {
        name,
        body,
        slug

    } = request.body

    Page.updateOne({
            _id: request.params.id,
        }, {
           name,
           slug,
           body
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Page)
        })
}

exports.delPagesById = (request, response) => {
    Page.findOneAndDelete({
        _id: request.params.id
    }, (error, deleteId) => {
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