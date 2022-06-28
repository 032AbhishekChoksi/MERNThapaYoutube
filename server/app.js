const express = require('express');
const app = express();

// Middleware
const middleware = (req, res, next) => {
    console.log(`Hello my middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello World from the Server`);
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello About World from the Server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact World from the Server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login World from the Server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registation World from the Server`);
});

// console.log(`Subscribe to my channel`);

app.listen(3000, () => {
    console.log(`Server is running at Port No 3000`);
})