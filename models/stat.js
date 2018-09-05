const mongoose = require('mongoose')

var statSchema = new mongoose.Schema({
    views: Number,
    shares: Number,
    votes: Number

})

var Stat = mongoose.model('Stat', statSchema);

module.export = Stat;