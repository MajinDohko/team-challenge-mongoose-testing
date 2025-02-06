const express = require('express');
const app = express();
const PORT = 3000;
const dbConnection = require('./config/config');
const router = require('./routes/posts');

app.use('/', router)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

/* 
const express = require('express');
const app =  express();
const PORT = 3000;

const dbConnection = require('./config/config');
-- AQUI NO METE EL DBCONNECTION ENTRE LLAVES--
--LA PARTE DE APP.USE NO APARECE, DIRECTAMENTE --

const routes = require('./routes/posts');

app.use(express.json());

app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
-- ESTO ME LO SACA DE MANERA DIFERENTE SIEMPRE--

module.exports = app;


*/