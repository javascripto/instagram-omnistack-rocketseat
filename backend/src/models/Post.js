const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel;
