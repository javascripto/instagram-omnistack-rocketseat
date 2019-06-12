const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },
    async store(req, res) {
        const { author, description, place, hashtags } = req.body;
        const { filename: image, path: filepath, destination } = req.file;

        const filename = `${image.split('.')[0]}.jpg`;

        await sharp(filepath)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(destination, 'resized', filename));

        fs.unlinkSync(filepath)

        const post = await Post.create({
            place,
            author,
            hashtags,
            description,
            image: filename,
        });

        req.io.emit('post', post);

        return res.json(post);
    },
    async _(req, res) {},
    async __(req, res) {},
}