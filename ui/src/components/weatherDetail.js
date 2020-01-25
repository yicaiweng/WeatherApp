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
                    <div className="one wide column">
                        <button className="ui button teal" onClick={props.decrementCarouselIndex}>{'<'}</button>
                    </div>
                    <div className="fourteen wide column">
                        <WeatherCarousel centerIndex={props.centerIndex} forecasts={props.forecast.data} selectedIndex={props.selectedIndex} selectCard={props.selectCard}/>
                        
                    </div>    
                    <div className="one wide column">
                        <button className="ui button teal" onClick={props.incrementCarouselIndex}>{'>'}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherDetail;