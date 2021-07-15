const functions = require("firebase-functions")
const express = require('express')

const app = express()

app.get('/baseballteams', (req, res) => {
  res.send('Ummm... the Mets?')
})

app.get('/basketball', (req, res) => {
  res.send('Ummm... the Heat?')
})

app.get('/yo', (req, res) => {
  res.send('YO')
})

app.get('/my-little-ponies', (req, res) => {
  res.send('You found the secret page. Go ponies, go!')
})

exports.app = functions.https.onRequest(app)
