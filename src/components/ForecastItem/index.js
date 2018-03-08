import React from 'react';
import PropTypes from 'prop-types';

const forecastItem = ({weekDay}) => (
    <div>
        {weekDay}
    </div>
)
forecastItem.propTypes ={
    weekDay: PropTypes.string.isRequired
}
export default forecastItem


