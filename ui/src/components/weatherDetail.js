import React from 'react';

const WeatherDetail = props => {
// class WeatherDetail extends Component{
    return(
        <div>
            <div>City Name is: {props.city}</div>
        </div>
    )
}

export default WeatherDetail;