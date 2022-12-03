const express = require('express');
const bodyParser = require('body-parser');

const transactionRoutes = require('./routes/transactions');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
});

app.use('/api', transactionRoutes);

app.listen(8080);