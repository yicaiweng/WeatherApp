const express = require('express')
const app = express()

// Pulling port from env
require('dotenv').config()
const port = process.env.PORT

// Routes can be defined here
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, console.log(`Server started on port ${port}...`))