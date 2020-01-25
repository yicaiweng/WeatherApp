const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


// Pulling in env variables
require('dotenv').config()
const port = process.env.PORT
const GEOCODING_API = process.env.GEOCODING_API
const WEATHER_API = process.env.WEATHER_API

// Routes can be defined here
app.get('/', (req, res) => {
    res.send('Hello! Thw weather server is up and running')
})

app.get('/getWeather', (req, res) => {
    // TODO
    // Do any necessary input validation
    let search = req.query.search
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: search,
            key: GEOCODING_API
        },
    }).then(response => {
        let lat = response.data.results[0].geometry.location.lat;
        let lon = response.data.results[0].geometry.location.lng;

        axios.get('https://api.weatherbit.io/v2.0/forecast/daily', {
            params: {
                lat,
                lon,
                key: WEATHER_API
            }
        }).then(({ city_name, data }) => {
            let response = {
                city: city_name,
                weatherData: data
            }
            res.status(200).send(response)
        }).catch(err => {
            // TODO: error handling / logging
            console.log(err);
        })
    }).catch(err => {
        // TODO: error handling / logging
        console.log(err);
    })
})

app.listen(port, console.log(`Server started on port ${port}...`))