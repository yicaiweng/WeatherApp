const express = require('express')
const app = express()

// Pulling port from env
require('dotenv').config()
const port = process.env.PORT

// Routes can be defined here
app.get('/', (req, res) => {
    res.send('Hello! Thw weather server is up and running')
})

app.get('/getWeather', (req, res) => {
    // TODO
    // Do any necessary input validation
    // Call Weatherbit API
    // Return weather data in the expected form
})

app.listen(port, console.log(`Server started on port ${port}...`))