const {
  addBooks,
  listBooks,
  remove,
  updateBook,
} = require("./../services/books.service");

exports.list = async function (req, res) {
  const result = await listBooks();
  res.send({
    ok: true,
    result,
  });
};

exports.addBooks = async function (req, res) {
  let data = req.body;
  let result = await addBooks(data);
  res.status(200).send({ ok: result });
};

exports.update = async function (req, res) {
  let data = req.body;
  let result = await updateBook(data);

  // Response
  res.status(200).send({
    ok: result,
  });
};

exports.remove = async function (req, res) {
  let bookId = req.params.id;
  await remove(bookId);
  // Response
  res.status(200).send({
    ok: true,
  });
};
