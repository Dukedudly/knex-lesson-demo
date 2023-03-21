const express = require("express");
const app = express();
const port = 5433;
const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req,res) => {
  res.send('App is up and running.')
})


app.listen(port, (err) => {
  if (err) {throw err} else{
  console.log('your app is compatible with express and knex! Yay you did it!')
}})

app.get('/pets', (req,res) =>{
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      res.json(petNames)
    })
})
