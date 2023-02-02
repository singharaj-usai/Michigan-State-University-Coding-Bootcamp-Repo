const counter = require('../index');

test('counter is a defined function', () => {
  expect(typeof counter).toEqual('function');
});

test('counter is returning as an object', () => {
  const studentCounter = counter();
  expect(typeof studentCounter).toEqual('object');
});

test('count should equal 1', () => {
  const studentCounter = counter();
  expect(studentCounter.increment()).toEqual(1);
});

test('count should equal 2', () => {
  const studentCounter = counter();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(2);
});

test('count should equal 5', () => {
  const studentCounter = counter();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(5);
});
