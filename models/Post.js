//!Configuramos el esquema de los requisitos qué van a tener los post:
const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema({
    title: {type:String, required: true},
    body: {type:String, required: true}
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;