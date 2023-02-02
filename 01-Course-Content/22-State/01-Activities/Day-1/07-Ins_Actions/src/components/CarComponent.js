import React from 'react';
import { useCar } from '../utils/CarContext';

export default function CarComponent() {
  const { cars, startCar, stopCar } = useCar();

  return (
    <section className="car-list">
      {cars.map((car) => (
        <div key={car.id} id={car.id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {car.model} <br />
            <span style={{ fontSize: '1rem' }}>
              This car was manufactured in {car.year}
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{car.make}</p>
          </div>
          <span style={{ fontSize: '1rem' }}>
            {car.isRunning ? 'Car is running 🏎️' : 'Car is off 💤'}
            <button
              id="turnOn"
              onClick={
                !car.isRunning ? () => startCar(car.id) : () => stopCar(car.id)
              }
            >
              Toggle Engine
            </button>
          </span>
        </div>
      ))}
    </section>
  );
}
