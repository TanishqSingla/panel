const express = require('express');
const path = require('path')

const app = express();

//mock db
const data = [];

app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/add', (req, res) => {
  const response = {message: 'add'}
  res.status(200).json(response)
});

app.post('/update', (req, res) => {
  const response = {message: 'update'}
  res.status(200).json(response)
})

app.listen(5000, () => console.log('Server listening on port 5000'))