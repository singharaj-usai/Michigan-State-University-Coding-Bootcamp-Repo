import React, { useState } from 'react';
import { useCar } from '../utils/CarContext';

export default function CarComponent() {
  const { cars, addCar, removeCar } = useCar();

  return (
    <section className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {car.model} <br />
            <span style={{ fontSize: '1rem' }}>
              This car was manufactured in {car.year}
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{car.make}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
