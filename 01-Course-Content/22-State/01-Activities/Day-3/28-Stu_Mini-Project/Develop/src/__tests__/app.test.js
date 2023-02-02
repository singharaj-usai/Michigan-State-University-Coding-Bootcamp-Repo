import { render } from '@testing-library/react';
import CarComponent from '../components/CarComponent';
import CarProvider from '../utils/CarContext';

test('CarComponent renders', () => {
  render(
    <CarProvider>
      <CarComponent />
    </CarProvider>
  );
});
