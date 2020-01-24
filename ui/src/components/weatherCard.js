import React, { Component } from 'react';
import a01d from '../assets/a01d.png';
import raindrop from '../assets/raindrop.png'

class WeatherCard extends Component {
    render() {
        return(
            <div className="ui weatherCard-container">
                <div>
                    <div>
                        <p>10/12</p>
                        <p>Moderate Rain</p>
                    </div>
                    <div>
                        <img src={a01d} alt="weatherIcon" />
                    </div>
                    <div>
                        33°
                    </div>
                    <div className="pop">
                        <img className="icon" src={raindrop} alt="raindrop" />
                        25%</div>
                </div>
            </div>
        )};
    
}

export default WeatherCard;