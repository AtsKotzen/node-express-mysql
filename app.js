const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
  // Template engine
  app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
  app.set('view engine', 'handlebars');
  app.set("views", "./views");
  // Body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json()); 

// Rotas
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send('Deu ruim: ' + err)
    })    
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

