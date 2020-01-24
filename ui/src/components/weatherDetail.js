import React from 'react';
import WeatherCard from './weatherCard';

const WeatherDetail = props => {
// class WeatherDetail extends Component{
    return(
        <div>
            <p>
                City Name is: {props.city}
            </p>
            <p>Weather in next 16days</p>
            <div className="weather-details">
                <WeatherCard />
            </div>
        </div>
    )
}

export default WeatherDetail;