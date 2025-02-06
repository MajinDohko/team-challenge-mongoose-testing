const express = require('express');
const app = express();
const PORT = 3000;
const dbConnection = require('./config/config');
const router = require('./routes/posts');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

dbConnection();

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

module.exports = app;

