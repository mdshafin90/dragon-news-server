const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors')

const categories = require('./Data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})