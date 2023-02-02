const Student = require('../index');

test('Student is a defined function', () => {
  expect(typeof Student).toEqual('function');
});

test('Student is returning as an object', () => {
  let newStudent = Student('Jean', '10th');
  expect(typeof newStudent).toEqual('object');
});

test('Checkng log for correct values, Dominique, 11th', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const newStudent = Student('Dominique', '11th');
  newStudent.greet();
  expect(consoleSpy).toHaveBeenCalledWith(
    'My name is Dominique and I am in 11th grade'
  );
});

test('Checkng log for correct values, Raphael, 4th', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const newStudent = Student('Raphael', '4th');
  newStudent.greet();
  expect(consoleSpy).toHaveBeenCalledWith(
    'My name is Raphael and I am in 4th grade'
  );
});
