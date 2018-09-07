const Blog = require('../models/blog')

exports.getAllBlogs = (request, response) => {
    var query = Blog.find()
    console.log(request.query)
    query.exec((error, blogs) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(blogs)
    })
}

exports.postNewBlogs = (request, response) => {
    console.log(request.body)
    let blog = new Blog({
        title: request.body.title,
        userId: request.body.userId,
        author: request.body.author,
        description: request.body.description,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt,
        topic: request.body.topic
    })
    blog.save().then((blog) => {
        console.log('Blog Added Successfully')
        response.json(blog)
    })
}

exports.updateBlogsById = (request, response) => {
    const {


        title,
        userId,
        author,
        description,
        createdAt,
        updatedAt,
        topic

    } = request.body

    Blog.updateOne({
            _id: request.params.id,
        }, {

             title,
        userId,
        author,
        description,
        createdAt,
        updatedAt,
        topic
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Blog)
        })
}

exports.delBlogsById = (request, response) => {
    Blog.findOneAndDelete({
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