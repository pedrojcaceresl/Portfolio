const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
let PORT;

app.use(morgan('tiny'));
app.use(express.json());

// Environment config
process.env.STATUS !== 'production' ?  (PORT = process.env.PROD_PORT) : (PORT = process.env.DEV_PORT);

//Default route
app.get('/', (req, res) => {
    res.send('Welcome to the lib API');
})

// Routes
require('./src/routes/books.routes.js')(app);


app.listen(PORT, () => console.log(`Server listening on PORT ${PORT} you are in ${process.env.STATUS !== 'production' ? 'PROD' : 'DEV'} environment`));