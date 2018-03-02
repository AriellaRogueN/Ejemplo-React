import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import{CLOUD,CLOUDY,SUN,RAIN,SNOW} from './../../../constant/weather';

const StateToIcon = (weatherState) => {
    switch (weatherState) {
        case CLOUD:
          return 'cloud';
        case CLOUDY:
        return 'cloudy';
        case SUN:
        return 'day-sunny';
        case RAIN:
        return 'rain';
        case SNOW:
        return 'snow';
            
        default:
            return 'day-sunny'
    }
}


const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons name={StateToIcon(weatherState)} size='2x'></WeatherIcons>);

}

const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span> 
            {`${temperature} °C`}
        </span>
      
    </div>
);

WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}
export default WeatherTemperature;