const express = require('express');

const app = express();

app.listen(3000, ()=> console.log('server is running'));

//Set View Engine to EJS
app.set('view engine', 'ejs');


//route for home /
app.get('/', (req, res) => {
    res.render('Home');
})

//route for /about
app.get('/about', (req, res) => {
    res.render('About');


})