const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors')

const categories = require('./Data/categories.json')
const news = require('./Data/news.json');
const e = require('express');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

// For all news 

app.get('/news', (req, res) => {
    res.send(news)
})

// For Specific

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

//For Category Wise

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})