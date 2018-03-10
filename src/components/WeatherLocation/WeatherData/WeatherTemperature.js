import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import{CLOUD,CLOUDY,SUN,RAIN,SNOW,THUNDER,DRIZZLE} from './../../../constant/weather';

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
        case THUNDER:
        return 'day-thunderstorm';
        case DRIZZLE:
        return 'day-showers'
        default:
            return 'day-sunny'
    }
}


const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons name={StateToIcon(weatherState)} size='2x'></WeatherIcons>);

}

const WeatherTemperature = ({temperature,weatherState}) => (
    <div className="temperature">
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