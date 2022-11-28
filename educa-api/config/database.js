const Mongoose = require('mongoose');
const debug = require('debug')('app:mongoose');

const dbhost = process.env.DBHOST || 'localhost';
const dbport = process.env.DBPORT || '27017';
const dbname = process.env.DBNAME || 'proyectoEDUCA';

const dburi = process.env.DBURI || 
    `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async () => {
    try {
        /* La funcion recibe el dburi de la conexion */
        debug(dburi);
        await Mongoose.connect(dburi);
        debug('DB connection successful');
    } catch (error) {
        console.log(error.message);
        debug('Error in DB connection');
        process.exit(1);
    }
}

module.exports = {
    connect
}