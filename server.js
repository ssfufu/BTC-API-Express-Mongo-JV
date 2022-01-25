const express = require('express')
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/db-jv-btc', {
  useNewUrlParser: true,
})

mongoose.connection.on('open', () => console.log('connexion réussie'))

const Constructeurs = require('./schemas/constructeurs.schemas')

Constructeurs.create({
  societe: 'Nintendo',
  creation: 1889,
  pays: 'Japon',
})

const server = express()

server.get('/', (req, res) => {
  res.writeHead(200)
  res.end('<h1>Bienvenue sur notre API</h1>')
})

server.get('/constructeurs', (req, res) => {
  res.writeHead(200)
  res.end('<h1>Bienvenue sur notre API</h1>')
})

server.listen(3000)
