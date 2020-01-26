import React from 'react';
import WeatherCard from './weatherCard';

const WeatherCarousel = ({ centerIndex, forecasts, selectedIndex, selectCard }) => {
    return (
        <div className="ui sixteen grid center ">
            {forecasts.slice(centerIndex - 2, centerIndex + 3).map((forecast, i) => {
                return <WeatherCard
                        key={i}
                        index={i}
                        forecasts={forecast}
                        selectedIndex={selectedIndex}
                        selectCard={selectCard}
                    />
            })}
        </div>
    )
}

export default WeatherCarousel;