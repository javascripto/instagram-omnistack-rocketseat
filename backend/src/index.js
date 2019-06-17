const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://admin:admin@cluster0-lql7c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors())

app.use(require('./routes'));

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

server.listen(process.env.PORT || 3333);
