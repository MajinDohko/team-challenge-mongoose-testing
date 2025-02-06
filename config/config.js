const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () =>{
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    }catch (error){
        console.error(error);
        throw new Error ('Error a la hora de iniciar la base de datos')
    };
};

module.exports = dbConnection;


/* const mongoose = require('mongoose');
const path = require('path'); 

--ESTA PARTE SEGUN GEMINI IMPORTA EL MOCULO PATH DE NODE JS. NO SE EXACTAMENT A QUE SE REFIERE PERO OS PONGO POR AQUI EL APUNTE--

require('dotenv').config({ path: path.join(__dirname, '../env/.env') });

-- AÑADE ESTO TAMBIEN, EN TEORIA PARA CONSTRUIR LA RUTA HACIA LA URL DE ENV. PONE QUE ES UNA BUENA PRACTICA DE SEGURIDAD, PERO REALMENTE NO SE SI TIENE RELEVANCIA A LA HORA QUE FUNCIONE--

const dbConnection = async() => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = dbConnection;*/



