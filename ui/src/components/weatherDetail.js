import React from 'react';
import WeatherCard from './weatherCard';

const WeatherDetail = props => {
    if(props.forecast.data) {
        // console.log(props.forecast.data)
        const forecasts = props.forecast.data.map((forecast, i) => {
            return <WeatherCard forecasts={forecast} key={i}/>
        })
     
        return(
            <div>
                <p>
                    City Name is: {props.city}
                </p>
                <p>Weather in next 16 days</p>
                <div className="weather-details">
                    {forecasts}
                </div>
            </div>
        )
    }
}

export default WeatherDetail;