const { Sequelize } = require('sequelize');

// Pass the connection URI
const sequelize = new Sequelize('books', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

const testConnection = async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established!');
    } catch (error) {
        console.log('Unable to connect to the database');
    }
}
testConnection();

const DB = {
    Sequelize, sequelize
}

module.exports = DB;