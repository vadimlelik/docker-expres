const express = require('express')

const app = express()

app.use(express.static('./index.html'))

app.get('/', (req, res) => {
    res.send(new Date())
})

app.listen(3005, () => {
    console.log('Hello world');
})