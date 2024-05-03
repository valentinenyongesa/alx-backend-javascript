// 10-api/api.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 7865;

app.use(bodyParser.json());

// Middleware to validate :id parameter as a number
app.param('id', (req, res, next, id) => {
    if (!/^\d+$/.test(id)) {
        return res.status(404).send('Not Found');
    }
    next();
});

// Index route
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Cart route
app.get('/cart/:id', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

// Login route
app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});

const server = app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
