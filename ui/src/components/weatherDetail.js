import React from 'react';
import WeatherCarousel from './weatherCarousel'

const WeatherDetail = props => {
    if(props.forecast.data) {

        return(
            <div>
                <p>
                    City Name is: {props.city}
                </p>
                <div className="weather-details ui grid">
                <div className="four wide column">
                    <button className="ui button teal" onClick={props.decrementCarouselIndex}><i className="big caret left icon"></i></button>
                </div>
                <p className="eight wide column"> Weather in next 16 days</p>
                <div className="four wide column">
                    <button className="ui button teal" onClick={props.incrementCarouselIndex}><i className="big caret right icon"></i></button>
                </div>
                    <div className="sixteen wide column">
                        <WeatherCarousel centerIndex={props.centerIndex} forecasts={props.forecast.data} selectedIndex={props.selectedIndex} selectCard={props.selectCard}/>    
                    </div>    
                </div>
            </div>
        )
    }
}

export default WeatherDetail;