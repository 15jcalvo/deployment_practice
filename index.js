console.log('here')

// if (process.argv[2] === 'web-49') {
//     console.log('web-49')
// } else {
//     console.log('yeet')
// }

// console.log(process.env.USERNAME)

const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'hello there'})
})

const port = 9001
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})