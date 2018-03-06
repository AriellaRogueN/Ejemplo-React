import React from 'react';
import Proptypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
//Modificamos para pasar ciudades
        /*pasamos cities a weatherlocation-Asociar ciudad con una key, 
             key especifica para cada ciudad, para que se escriba solo esa ciudad */

const LocationList = ({cities, onSelectedLocation}) =>  {
    const hadlerWeatherLocationClick = city => {
        console.log('hadlerWeatherLocationClick')
        onSelectedLocation(city);
    }


    const strToComponent = cities => (
    cities.map(city => (<WeatherLocation key={city} city={city}
        onWeatherLocationClick={() =>
               hadlerWeatherLocationClick(city)}/>))
)   
return(
    <div>
        {strToComponent(cities)}
    </div>

)

};


/*const LocationList = (cities) => (
    <div>
        <WeatherLocation city= {'Santiago,scl'}/>
        <WeatherLocation city={'Bogota,col'}/>
        <WeatherLocation city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Rio de Janeiro,br'}/>
    </div>  antes de pasar map,esto fue lo que cambio*/ 

LocationList.propTypes ={
    cities: Proptypes.array.isRequired    //Validemos que este en un array
}
export default LocationList;

