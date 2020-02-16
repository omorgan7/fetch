'use strict'

const express = require('express')

const app = express()

app.get('/', (req, res, next) => { 
    res.sendFile('index.html', {root: './'})
})

let counter = 1;

app.get('/data', (req, res, next) => {
    res.send(counter.toString())
    ++counter
})

app.listen(8088)