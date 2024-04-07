const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    shortId : {
        type : String,
        required : true
    },
    visits : [
        {visitTimestamps : {
            type : Number 
        }}
    ],
},{
    timestamps:true
})

module.exports = mongoose.model('ShortUrl',shortUrlSchema)