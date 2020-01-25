import React from 'react';
import WeatherCard from './weatherCard';

const WeatherCarousel = ({ centerIndex, forecasts}) => {
    return forecasts.slice(centerIndex - 2, centerIndex + 3).map((forecast, i) => {
        return <WeatherCard forecasts={forecast} key={i} />
    })

}

export default WeatherCarousel;