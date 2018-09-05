const mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
    title: String,
    userId: String,
    author: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,

    topic: {
        technology: String,
        politics: String,
        health: String,
        astrology: String,
        tourism: String,
        science: String,
        books: String

    }
})

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;