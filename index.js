const express = require('express')
const fetch = require('node-fetch')
const app = express()

// app.use(express.static('./build'))

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || " http://date:3005"

app.get('/', (req, res) => {
    fetch(DATE_SERVER_HOST)
        .then(res => res.json())
        .then(data => {
            res.send(`hello current date is ${data}\n`)
        })

})

app.listen(3000, () => {
    console.log('Hello world');
})