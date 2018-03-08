import React from 'react';
import PropTypes from 'prop-types';

/*const Location = () =>(
    <div>
       <h1>
       Santiago de Chile
       </h1>
    </div>*/

const Location = ({city}) =>(    //sin return
    //const city = props.city;
    //const{city} = props;
      //return (
          <div className='locationCont'>
              <h1>
                {city}
              </h1>
          </div>
    
);
Location.proptypes ={
city: PropTypes.string.isRequired,
}
export default Location;
