const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const post = await Post.create({...req.body});
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

router.get('/id/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        const post = await Post.findById(id);
        if (!post) res.json({ mensaje : 'no se encuentra el post' });
        res.status(200).json(post)

    } catch (error) {
        console.error('error al encontrar el post' , error)
    }
})



router.get('/title/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const post = await Post.find(title);
        if (!post) res.json({ mensaje : 'no se encuentra el post' });
        res.status(200).json(post)
    
    } catch (error) {
        console.error('error al encontrar el post' , error)
    }
})

router.put('/id/:_id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params._id, 
            {title: req.body.title},
            {body: req.body.body},
            {new:true}
        );
        if (!post) {
            return res.status(404).json({ error: 'post no encontrado' });
        }
        res.status(200),json(post);
    } catch (error) {
        console.error('error al actualizar el post', error);
    }


router.delete('/id/:_id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params._id);
        res.status(200).json({mensaje: 'post eliminado correctamente', post})
    } catch (error) {
        console.error('error al eliminar el post', error);
    }
})

})

//! EXTRA PAGINACIÓN de 10 en 10:
router.get("/postsWithPagination", async (req, res) => {
    try {
        let { page } = req.query;
        page = parseInt(page) || 1; 

        const limit = 10; 
        const skip = (page - 1) * limit; 

        const posts = await Post.find().skip(skip).limit(limit);
        const totalPosts = await Post.countDocuments(); 
        const totalPages = Math.ceil(totalPosts / limit); 

        res.json({
            page,
            totalPages,
            totalPosts,
            posts
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las publicaciones" });
    }
});


module.exports = router;






