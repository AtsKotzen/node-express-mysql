const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
  // Template engine
  app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
  app.set('view engine', 'handlebars');
  app.set("views", "./views");
 
  // Conexão com o banco de dados
  const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Rotas
app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send('Formulario recebido')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

