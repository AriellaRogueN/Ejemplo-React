import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal"
}  */

const api_key = "6d52e53fc10bbcb70b045c9f1f03afb0";
const url = `http://api.openweathermap.org/data/2.5/forecast`;



class ForecastExtended extends Component{
     constructor (){
         super();
         this.state = {
             forecastData:null
         }
     }

     componentDidMount(){
         const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}&units=metric`;
         
         fetch(url_forecast).then(data => (data.json())
        ).then(weather_data => {
            console.log(weather_data);
            const forecastData=transformForecast(weather_data);
            this.setState ({forecastData})
        })
     }

    renderForecastItemDays (forecastData) {
        return forecastData.map(forecast => (
          <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>

        )   
            
        )

    }  

    renderProgress () {
        return (<h1>Cargando pronostico</h1>)
    }

    render (){
        const {city} = this.props;
        const {forecastData} = this.state
        return(
            <div>
                <h2>Pronostico extendidido {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData): this.renderProgress()}
            </div>
        )
    }
       
}  



export default ForecastExtended;