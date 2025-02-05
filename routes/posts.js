const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const { title } = req.body;
        const post = new Post({ title });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'no se ha podido publicar el post'});
    }
});

router.get('/', async (req, res) => {
    try {
        //res.send(`<h1>Página Funcionando</h1>`)
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'no se puede acceder al post RT' });
    }
    
});

module.exports = router;




