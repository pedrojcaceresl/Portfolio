const { where } = require("sequelize");
const { sequelize } = require("./../config/db.config");
const { BooksModel } = require("./../models/books.models");

exports.listBooks = async function () {
  let sql = 'SELECT * FROM "Books"';
  let data;
  try {
    
    data = await sequelize.query(sql);
  } catch (error) {
    console.log(error.message);
  }
  return data ? data[0] : [];
};

// Add books
exports.addBooks = async function (data) {
  let result;
  console.log(error('Se ha listado gracias'));

  try {
    await BooksModel.create(data);
    result = true;
  } catch (error) {
    console.log(error.message);
  }
  return result;
};

// Update books
exports.updateBook = async function (data) {
  let result;
  try {
    await BooksModel.update(
      {
        data,
      },
      {
        where: { bookId: data.bookId },
      }
    );
    result = true;
  } catch (error) {
    console.log(error.message);
    result = false;
    return [result, error.message]
  }
  return result;
};

// Remove book by id
exports.remove = async function (id) {
    try {
        await BooksModel.destroy({where: {bookId: id}})
    } catch (error) {
        console.log(error.message);
    }
};
