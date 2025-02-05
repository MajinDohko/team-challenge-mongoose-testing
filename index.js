const express = require('express');
const app = express();
const PORT = 3000;
const {dbConnection} = require('./config/config');
const routes = require('./routes/posts');

app.use('/', routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

