import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'


const data ={
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind:"normal"
}



const forecastItem = ({weekDay,hour,data}) => (
    <div className='forecastItem' >
      <div>
        {weekDay}
         -  {hour} hr
      </div>
      <WeatherData data={data}/>
    </div>
)






forecastItem.propTypes ={
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default forecastItem;


