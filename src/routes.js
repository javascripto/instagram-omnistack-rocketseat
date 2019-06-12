const multer = require('multer');
const { Router } = require('express');

const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');


const upload = multer(uploadConfig);
const routes = new Router();

routes.get('/', (req, res) => {
    const { name } = req.query;
    res.send(name ? `Olá, ${name}` : 'Olá, Mundo!');
});

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;
