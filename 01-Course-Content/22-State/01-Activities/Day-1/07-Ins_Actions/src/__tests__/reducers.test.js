import { START_CAR, STOP_CAR } from '../utils/actions';
import reducer from '../utils/reducers';

const ADD_CAR = 'ADD_CAR';
const REMOVE_CAR = 'REMOVE_CAR';

const initialState = {
  cars: [
    {
      id: 1233,
      make: 'Honda',
      model: 'Civic',
      isRunning: false,
    },
    {
      id: 1234,
      make: 'Tesla',
      model: 'Y',
      isRunning: false,
    },
  ],
};

test('ADD_CAR', () => {
  let newState = reducer(initialState, {
    type: ADD_CAR,
    payload: [
      {
        make: 'Ford',
        model: 'Escort',
      },
    ],
  });

  expect(initialState.cars.length).toBe(2);
  expect(newState.cars.length).toBe(3);
});

test('REMOVE_CAR', () => {
  let newState = reducer(initialState, {
    type: REMOVE_CAR,
    payload: 3,
  });

  expect(initialState.cars.length).toBe(2);
  expect(newState.cars.length).toBe(2);
});

test('START_CAR', () => {
  let newState = reducer(initialState, {
    type: START_CAR,
    payload: {
      id: 1234,
      name: 'Tesla',
      model: 'Y',
      isRunning: true,
    },
  });

  expect(initialState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].isRunning).toBe(true);
});

test('STOP_CAR', () => {
  let newState = reducer(initialState, {
    type: STOP_CAR,
    payload: {
      id: 1234,
      name: 'Tesla',
      model: 'Y',
      isRunning: false,
    },
  });

  expect(initialState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].isRunning).toBe(false);
});
