const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('./../config/db.config');

const BooksModel = sequelize.define('Books', {
    bookId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    publisherId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pub_year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    tableName: 'Books',
    modelName: 'Books',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
}    
);
// Export the model
module.exports = { BooksModel };