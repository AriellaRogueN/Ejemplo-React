import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

class ForecastExtended extends Component{
    renderForecastItemDays () {
        return(
            days.map(day => (<ForecastItem key={day} weekDay = {day}/>))
        )
    
    }
    render (){
        const {city} = this.props;
        return(
            <div>
                <h2>Pronostico extendidido {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
       
    
}


export default ForecastExtended;