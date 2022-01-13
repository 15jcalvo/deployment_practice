//to inject config vars inside the .env file
require('dotenv').config()

console.log('here')

// if (process.argv[2] === 'web-49') {
//     console.log('web-49')
// } else {
//     console.log('yeet')
// }

// console.log(process.env.USERNAME)

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'hello there'})
})

app.get('/hello', (req, res) => {
    res.json({ message: 'hello there'})
})

const myPort = 9001 // heroku wants to set its own port
const port = process.env.PORT || myPort
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})