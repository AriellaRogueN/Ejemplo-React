import React, {Component} from 'react'; //Llamo a Component de app.js
import Location from './Location';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW } from './../../constant/weather';
import WeatherData from './WeatherData';

//API

const api_key = "6d52e53fc10bbcb70b045c9f1f03afb0" ;
const location = 'Santiago,scl'
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

//crear la data
const data1= {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '3m/s'
}

//creamos otra data para dar funcionalidad al boton.
const data2 = {
    temperature: 10,
    weatherState: SNOW,
    humidity: 5,
    wind: '20m/s'
}

//Construir componente de clase (vamos a transformar Weaterlocation para poder hacer mas cosas )

class WeatherLocation extends Component{
    constructor (){
        super();    //Hereda propiedades del constructor
      // se crean estados para que vayan cambiando, relacionado con las data.
    
        this.state = { 
          city: 'Santiago',
          data: data1
        }  

    }
//Traer datos de iconos
getWeatherState = weather =>{
    return SUN;
}

//Traer datos de API
    getData = (weather_data) =>{
        const {humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        //asociar icono con temperatura
        const weatherState = this.getWeatherState(this.weather)

        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }

    handleUpdateClick = () => {
        //seteamos el estado es decir, le decimos que cambie.
        /*Al agregar la api esto no se usa
        this.setState({
            //city: 'Santiago',    se quita, react actualiza partes nuevas, ya no es necesario.
            data: data2 })*/
        fetch(api_weather).then(data => {
             console.log(data);
             return data.json();   //que retorne en Json
        }).then(weather_data =>{
            const data = this.getData(weather_data);
            console.log(weather_data);
            //setear para que pase al estado de la data
            this.setState({ data })
            console.log(weather_data);
        })


        console.log("actualizado");
    }

    render = () => {
        const {city,data} = this.state;     //refactorizamos, es lo mismo que this.state.data o this.state.city
        return(
            <div className= 'weaterLocation'>
                <Location city={city}></Location>  
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;

/*const WheatherLocation = () => (
    <div>
        <Location city={'Guanaqueros'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
); */  //Componente funcional, lo reemplazamos por el componente de clase.

