const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;


/* const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, {timestamps: true})

-- AQUI NOS VUELVE AÑADIR EL TYPE: STRING Y DEMAS, ESTO ME ACUERDO QUE LO QUITAMOS AYER (TODO EL TEMA DEL BODY Y DE MÁS)

const Post = mongoose.model('Post', postSchema)

module.exports = Post */