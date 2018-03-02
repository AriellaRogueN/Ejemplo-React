import React from 'react';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW } from './../../../constant/weather';
import './style.css'

const WeatherData = () => (
    <div className='weatherDataCont'>  
        <WeatherTemperature temperature={24} weatherState={SUN}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'3m/s'}></WeatherExtraInfo>
    </div>
)

export default WeatherData;