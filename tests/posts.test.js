//!Configuramos el testeo de la creación de post:
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const Post = require('../models/Post');

describe('POST /create', () => {
    const post = {
        title: 'título de prueba',
        body: 'contenido de prueba'
    };

    beforeEach(async ()=>{
        await Post.deleteMany();
    })

    test('Create a Post', async () => {
        let postsCount = await Post.countDocuments({});
        expect(postsCount).toBe(0);

        resPost = await request(app).post('/create').send(post).expect(201);

        postsCount = await Post.countDocuments({});
        expect(postsCount).toBe(1);
    });
});