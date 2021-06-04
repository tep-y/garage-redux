import { FETCH_CARS } from '../actions';

const carsReducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default carsReducer;