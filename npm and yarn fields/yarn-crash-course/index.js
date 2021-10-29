const express = require('express');

const app = express();

app.get('/', (req, res) => { 
    res.send('<h1>Hello World</h1>');
    res.end();
});

const PORT = process.env.PORT || 8000;

app.listen((PORT), () => console.log(`Server Running on ${PORT}`));