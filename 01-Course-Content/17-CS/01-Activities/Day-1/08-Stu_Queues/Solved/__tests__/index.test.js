const Queue = require('../index');

describe('Queue class', () => {
  const inputArray = [1, 2, 3, 4];
  const queue = new Queue(inputArray);
  const newItem = 5;

  test('Can instantiate a new queue', () => {
    const queue = new Queue();
    expect(queue).toEqual({"container": []});
  });

  test('Can instantiate a new queue with an array', () => {
    expect(queue).toEqual( { "container": [1, 2, 3, 4] } );
  });

  test('Can add a new item at the end of the queue', () => {
    queue.addToQueue(newItem);
    expect(queue).toEqual( { "container": [1, 2, 3, 4, 5] } );
  });

  test('Can remove an item from the beginning of the queue', () => {
    queue.removeFromQueue(newItem);
    expect(queue).toEqual( { "container": [2, 3, 4, 5] } );
  });
});