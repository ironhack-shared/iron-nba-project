const path = require('path')

const express = require('express');
const hbs     = require('hbs');

const players = require('./models/players')

const app = express();

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/players', (req, res, next) => {
  res.render('players', {players});
});

app.get('/teams', (req, res, next) => {
  res.render('teams');
});

app.listen(3000);
