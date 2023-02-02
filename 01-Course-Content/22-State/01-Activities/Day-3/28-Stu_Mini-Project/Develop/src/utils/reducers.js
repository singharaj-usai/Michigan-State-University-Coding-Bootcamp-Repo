import { ADD_CAR, START_CAR, STOP_CAR } from './actions';
import createId from './createId';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newCarId = createId(state.cars);
      const newCar = { ...action.payload, id: newCarId };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case START_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    case STOP_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: false };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
