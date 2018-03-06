import React from 'react';
import Proptypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
//Modificamos para pasar ciudades
const strToComponent =  cities => (
    cities.map(city => (<WeatherLocation city={city}/>))
)          //pasamos cities a weatherlocation

const LocationList = ({cities}) => (
    <div>
        {strToComponent(cities)}
    </div>
)

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

