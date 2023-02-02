import React, { useContext } from 'react';

// Create our car context using React.CreateContext()
export const CarContext = React.createContext();

// Create a custom hook that allows easy access to our CarContext values
export const useCar = () => useContext(CarContext);

// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {
  const cars = [
    {
      id: 1,
      make: 'Honda',
      model: 'Civic',
      year: '2008',
      isRunning: false,
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'Y',
      year: '2021',
      isRunning: false,
    },
  ];

  // The provider component will wrap all other components inside of it that need access to our global state
  return <CarContext.Provider value={{ cars }} {...props} />;
}
