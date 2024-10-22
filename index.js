const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    db.query("SELECT  * from   users", (err, result) => {
        response(200, result, "semua data dari users", res)
    })

})

app.get('/find', (req, res) => {
    const findSql = `SELECT password FROM users  WHERE username = ${req.query.username}`
    db.query(findSql, (err, result) => {
        response(200, result, "find data", res)
    })
})

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})
app.get('/helo', (req, res) => {
    console.log({ urlParam: req.query })
    res.send('halaman ke-2')
})

app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
    res.send('update berhasil')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('login berhasil')
})