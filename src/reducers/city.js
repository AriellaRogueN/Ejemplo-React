import {SET_CITY} from './../actions';




export const city = (state, action) => {
    switch (action.type) {
        case SET_CITY:
             return { ...state, city: action.value  //cuando cambie el state, cambie  el valor de la city
    }
    default:
            return state;
    }
    
}
