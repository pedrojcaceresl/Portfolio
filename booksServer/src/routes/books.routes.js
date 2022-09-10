const { addBooks, list, remove, update} = require('./../controllers/books.controllers');

// export the router handler
module.exports = (app) => {
    app.get('/v1/api/books', list);
    app.post('/v1/api/books', addBooks);
    app.put('/v1/api/books', update);
    app.delete('/v1/api/books/:id', remove);
}