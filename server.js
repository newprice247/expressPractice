
const path = require('path')
const express = require('express')
const app = express()
const db = require('./database/db.json')
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
    console.log(`${req.method} response recieved!`)
    // res.status(200).send(`${req.method} response recieved!`)
    // .then(res.sendFile(path.join(__dirname, 'index.html')))
})

app.get('/api/users/:firstName', (req, res) => {
    console.info(`${req.method} response recieved!`)
    const filterResult = db.filter(x => x.firstName === req.params.firstName)
    res.json(filterResult)
})

app.post('/api/users', (req, res) => {
    console.info(`${req.method} response recieved!`)
    res.send(`${req.method} response recieved!`)
})

app.put('/', (req, res) => {
    console.info(`${req.method} response recieved!`)
    res.send(`${req.method} response recieved!`)
})

app.delete('/', (req, res) => {
    console.info(`${req.method} response recieved!`)
    res.send(`${req.method} response recieved!`)
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}!`)
})