import { reducer } from '../utils/reducers';

const ADD_CAR = 'ADD_CAR';
const REMOVE_CAR = 'REMOVE_CAR';

const initialState = {
  cars: [
    {
      id: 1233,
      make: 'Honda',
      model: 'Civic',
    },
    {
      id: 1234,
      make: 'Tesla',
      model: 'Y',
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
