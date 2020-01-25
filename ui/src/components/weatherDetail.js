import React from 'react';
import WeatherCarousel from './weatherCarousel'

const WeatherDetail = props => {
    if(props.forecast.data) {

        return(
            <div>
                <p>
                    City Name is: {props.city}
                </p>
                <p>Weather in next 16 days</p>
                <div className="weather-details ui grid">
                    <div className="two wide column">
                        <button className="ui button teal" onClick={props.decrementCarouselIndex}>{'<'}</button>
                    </div>
                    <div className="twelve wide column">
                        <WeatherCarousel centerIndex={props.centerIndex} forecasts={props.forecast.data}/>
                        
                    </div>    
                    <div className="two wide column">
                        <button className="ui button teal" onClick={props.incrementCarouselIndex}>{'>'}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherDetail;