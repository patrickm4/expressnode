const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.get('/names', (req, res) => res.json(["Peter","Shawn","Gabe"]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
