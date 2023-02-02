import React, { useState, useContext } from 'react';
import createId from './createId';

// Create our theme context using React.CreateContext()
export const CarContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useCar = () => useContext(CarContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function CarProvider({ children }) {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: 'Honda',
      model: 'Civic',
      year: '2008',
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'Y',
      year: '2021',
    },
  ]);

  const addCar = (car) => {
    const newID = createId(cars);
    const newCar = { ...car, id: newID };

    setCars([...cars, newCar]);
  };

  const removeCar = (id) => {
    const updatedCarList = cars.filter((car) => car.id !== id);
    setCars(updatedCarList);
  };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {children}
    </CarContext.Provider>
  );
}
