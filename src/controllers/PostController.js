const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },
    async store(req, res) {
        const { author, description, place, hashtags } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            place,
            image,
            author,
            hashtags,
            description,
        });

        return res.json(post);
    },
    async _(req, res) {},
    async __(req, res) {},
}